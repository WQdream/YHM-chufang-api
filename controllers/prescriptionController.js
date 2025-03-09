const Prescription = require('../models/Prescription');
const { Op } = require('sequelize');
const { processFormFiles, deleteFile } = require('./commonController');

// 使用之前定义的时间格式化函数
const formatDate = (date) => {
  if (!date) return null;
  
  // 如果是处方日期，直接返回原始值
  if (arguments[1] === 'prescriptionDate') {
    return date;
  }
  
  // 其他日期（如 createdAt, updatedAt）保持原来的格式
  return new Date(date).toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(/\//g, '-');
};

const formatResponseData = (data) => {
  if (Array.isArray(data)) {
    return data.map(item => {
      const jsonData = item.toJSON();
      // 直接使用原始值，不进行任何转换
      return {
        ...jsonData,
        prescriptionDate: jsonData.prescriptionDate,  // 直接使用原始值
        createdAt: formatDate(jsonData.createdAt),
        updatedAt: formatDate(jsonData.updatedAt)
      };
    });
  }
  
  if (data && typeof data === 'object') {
    const jsonData = data.toJSON();
    // 直接使用原始值，不进行任何转换
    return {
      ...jsonData,
      prescriptionDate: jsonData.prescriptionDate,  // 直接使用原始值
      createdAt: formatDate(jsonData.createdAt),
      updatedAt: formatDate(jsonData.updatedAt)
    };
  }
  
  return data;
};

// 创建处方（支持单个和批量）
exports.create = async (req, res) => {
  try {
    const { data } = req.body;
    
    if (!data) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: '数据不能为空'
      });
    }

    // 处理单个处方的图片
    if (!Array.isArray(data) && data.imageUrl) {
      try {
        console.log('处理单个处方图片:', data.imageUrl);
        const processedFiles = await processFormFiles([data.imageUrl.split('/').pop()]);
        if (processedFiles && processedFiles.length > 0) {
          data.imageUrl = processedFiles[0].url;
        }
      } catch (error) {
        console.error('处理图片失败:', error);
      }
    }
    
    // 处理批量处方的图片
    if (Array.isArray(data)) {
      for (const item of data) {
        if (item.imageUrl) {
          try {
            console.log('处理批量处方图片:', item.imageUrl);
            const processedFiles = await processFormFiles([item.imageUrl.split('/').pop()]);
            if (processedFiles && processedFiles.length > 0) {
              item.imageUrl = processedFiles[0].url;
            }
          } catch (error) {
            console.error('处理图片失败:', error);
          }
        }
      }
    }

    let prescriptions;
    
    if (Array.isArray(data)) {
      // 批量添加
      if (data.length === 0) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: '数据不能为空'
        });
      }
      
      // 数据验证
      for (const item of data) {
        if (!item.patientName || !item.gender || !item.diagnosis || !item.prescription) {
          return res.status(400).json({
            success: false,
            code: 400,
            message: '请填写完整的处方信息'
          });
        }
      }
      
      prescriptions = await Prescription.bulkCreate(data);
    } else {
      // 单个添加
      if (!data.patientName || !data.gender || !data.diagnosis || !data.prescription) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: '请填写完整的处方信息'
        });
      }
      
      prescriptions = await Prescription.create(data);
    }

    res.status(200).json({
      success: true,
      code: 200,
      message: '添加成功',
      data: formatResponseData(prescriptions)
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      code: 400,
      message: error.message
    });
  }
};

// 查询处方
exports.getPrescriptions = async (req, res) => {
  try {
    const { 
      page = 1, 
      pageSize = 10, 
      name,
      startTime,
      endTime
    } = req.query;
    
    const offset = (page - 1) * pageSize;
    
    // 构建查询条件
    const where = {};

    // 姓名模糊搜索
    if (name) {
      where.patientName = {
        [Op.like]: `%${name}%`
      };
    }
    
    // 时间段查询
    if (startTime || endTime) {
      where.prescriptionDate = {};
      if (startTime) {
        where.prescriptionDate[Op.gte] = startTime;  // 直接使用日期字符串
      }
      if (endTime) {
        where.prescriptionDate[Op.lte] = endTime;    // 直接使用日期字符串
      }
    }

    const { count, rows: prescriptions } = await Prescription.findAndCountAll({
      where,
      order: [['prescriptionDate', 'DESC']],
      offset: parseInt(offset),
      limit: parseInt(pageSize)
    });

    res.json({
      success: true,
      code: 200,
      message: '查询成功',
      data: {
        total: count,
        list: formatResponseData(prescriptions),
        page: parseInt(page),
        rows: parseInt(pageSize)
      }
    });
  } catch (error) {
    console.error('查询出错:', error);
    res.status(500).json({
      success: false,
      code: 500,
      message: error.message
    });
  }
};

// 更新处方
exports.update = async (req, res) => {
  try {
    if (!req.body.data.id) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: '处方ID不能为空'
      });
    }

    // 先获取原有处方数据
    const prescription = await Prescription.findByPk(req.body.data.id);
    
    if (!prescription) {
      return res.status(404).json({
        success: false,
        code: 404,
        message: '未找到该处方'
      });
    }

    // 处理图片更新的三种情况：
    // 1. 新上传了图片（imageUrl 不同）
    // 2. 删除了图片（新的 imageUrl 为 null 或空字符串）
    // 3. 没有改变图片（imageUrl 相同）
    
    if (prescription.imageUrl) {
      if (!req.body.data.imageUrl) {
        // 图片被删除的情况
        await deleteFile(prescription.imageUrl);
        req.body.data.imageUrl = null;
      } else if (req.body.data.imageUrl !== prescription.imageUrl) {
        // 图片被更新的情况
        try {
          console.log('处理更新处方图片:', req.body.data.imageUrl);
          const processedFiles = await processFormFiles(
            [req.body.data.imageUrl.split('/').pop()],
            prescription.imageUrl // 传入旧图片URL
          );
          if (processedFiles && processedFiles.length > 0) {
            req.body.data.imageUrl = processedFiles[0].url;
          }
        } catch (error) {
          console.error('处理图片失败:', error);
        }
      }
      // 如果 imageUrl 相同，则不做任何处理
    } else if (req.body.data.imageUrl) {
      // 原来没有图片，现在新增图片
      try {
        console.log('处理新增处方图片:', req.body.data.imageUrl);
        const processedFiles = await processFormFiles(
          [req.body.data.imageUrl.split('/').pop()]
        );
        if (processedFiles && processedFiles.length > 0) {
          req.body.data.imageUrl = processedFiles[0].url;
        }
      } catch (error) {
        console.error('处理图片失败:', error);
      }
    }

    await prescription.update(req.body.data);

    res.json({
      success: true,
      code: 200,
      message: '更新成功',
      data: formatResponseData(prescription)
    });
  } catch (error) {
    console.error('更新错误:', error);
    res.status(500).json({
      success: false,
      code: 500,
      message: error.message
    });
  }
};

// 删除处方（支持批量）
exports.delete = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: '请提供要删除的ID数组'
      });
    }

    // 先获取要删除的处方信息，以便删除相关图片
    const prescriptions = await Prescription.findAll({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    });

    // 删除相关的图片文件
    for (const prescription of prescriptions) {
      if (prescription.imageUrl) {
        await deleteFile(prescription.imageUrl);
      }
    }

    // 删除数据库记录
    await Prescription.destroy({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    });

    res.json({
      success: true,
      code: 200,
      message: ids.length > 1 ? '批量删除成功' : '删除成功',
      data: formatResponseData(prescriptions)
    });
  } catch (error) {
    console.error('删除错误:', error);
    res.status(500).json({
      success: false,
      code: 500,
      message: error.message
    });
  }
}; 