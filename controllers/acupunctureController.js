const Acupuncture = require('../models/Acupuncture');
const { Op } = require('sequelize');
const { processFormFiles, deleteFile } = require('./commonController');

// 添加时间格式化辅助函数
const formatDate = (date) => {
  if (!date) return null;
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

// 格式化返回数据的时间
const formatResponseData = (data) => {
  if (Array.isArray(data)) {
    return data.map(item => {
      const jsonData = item.toJSON();
      const formattedData = {
        ...jsonData,
        createdAt: formatDate(jsonData.createdAt),
        updatedAt: formatDate(jsonData.updatedAt)
      };
      
      if (jsonData.deletedAt) {
        formattedData.deletedAt = formatDate(jsonData.deletedAt);
      }
      
      return formattedData;
    });
  }
  
  if (data && typeof data === 'object') {
    const jsonData = data.toJSON();
    const formattedData = {
      ...jsonData,
      createdAt: formatDate(jsonData.createdAt),
      updatedAt: formatDate(jsonData.updatedAt)
    };
    
    if (jsonData.deletedAt) {
      formattedData.deletedAt = formatDate(jsonData.deletedAt);
    }
    
    return formattedData;
  }
  
  return data;
};

exports.create = async (req, res) => {
  try {
    const acupunctureData = req.body.data;
    
    if (!acupunctureData.patientName || !acupunctureData.gender ||
        !acupunctureData.acupunctureDate || !acupunctureData.acupoints) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: '请填写必要的信息'
      });
    }

    // 处理图片上传
    if (acupunctureData.imageUrls && Array.isArray(acupunctureData.imageUrls)) {
      try {
        const imageFileNames = acupunctureData.imageUrls.map(url => url.split('/').pop());
        const processedFiles = await processFormFiles(imageFileNames);
        if (processedFiles && processedFiles.length > 0) {
          acupunctureData.imageUrls = processedFiles.map(file => file.url);
        }
      } catch (error) {
        console.error('处理图片失败:', error);
      }
    }

    acupunctureData.imageUrls = JSON.stringify(acupunctureData.imageUrls || []);
    const acupuncture = await Acupuncture.create(acupunctureData);

    res.status(200).json({
      success: true,
      code: 200,
      message: '创建成功',
      data: formatResponseData(acupuncture)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      message: error.message
    });
  }
};

exports.getAcupunctures = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, patientName, startTime,
        endTime } = req.query;
    const offset = (page - 1) * pageSize;
    
    const where = {};
    if (patientName) {
      where.patientName = {
        [Op.like]: `%${patientName}%`
      };
    }

        // 时间段查询
        if (startTime || endTime) {
            where.acupunctureDate = {};
            if (startTime) {
              where.acupunctureDate[Op.gte] = startTime;  // 直接使用日期字符串
            }
            if (endTime) {
              where.acupunctureDate[Op.lte] = endTime;    // 直接使用日期字符串
            }
          }

    const { count, rows: acupunctures } = await Acupuncture.findAndCountAll({
      where,
      order: [['acupunctureDate', 'DESC']],
      offset: parseInt(offset),
      limit: parseInt(pageSize)
    });

    res.json({
      success: true,
      code: 200,
      message: '查询成功',
      data: {
        total: count,
        list: formatResponseData(acupunctures),
        page: parseInt(page),
        rows: parseInt(pageSize)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      message: error.message
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id, ...updateData } = req.body.data;

    if (!id) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: 'ID不能为空'
      });
    }

    const acupuncture = await Acupuncture.findByPk(id);
    
    if (!acupuncture) {
      return res.status(404).json({
        success: false,
        code: 404,
        message: '未找到该施针记录'
      });
    }

    // 处理图片更新
    if (updateData.imageUrls) {
      const oldImageUrls = JSON.parse(acupuncture.imageUrls || '[]');
      const newImageUrls = Array.isArray(updateData.imageUrls) ? updateData.imageUrls : [];

      // 找出被删除的图片
      const deletedUrls = oldImageUrls.filter(oldUrl => !newImageUrls.includes(oldUrl));

      // 只删除被移除的图片
      for (const deletedUrl of deletedUrls) {
        try {
          await deleteFile(deletedUrl);
        } catch (error) {
          console.error('删除图片失败:', error);
        }
      }

      // 处理新上传的图片
      try {
        const newImageFileNames = newImageUrls
          .filter(url => !oldImageUrls.includes(url))
          .map(url => url.split('/').pop());

        if (newImageFileNames.length > 0) {
          const processedFiles = await processFormFiles(newImageFileNames);
          if (processedFiles && processedFiles.length > 0) {
            // 保留未被删除的旧图片，并添加新处理的图片
            updateData.imageUrls = [
              ...oldImageUrls.filter(url => newImageUrls.includes(url)),
              ...processedFiles.map(file => file.url)
            ];
          }
        } else {
          // 如果没有新图片，则保留所有未被删除的图片
          updateData.imageUrls = newImageUrls;
        }
      } catch (error) {
        console.error('处理图片失败:', error);
      }

      updateData.imageUrls = JSON.stringify(updateData.imageUrls);
    }

    await acupuncture.update(updateData);

    res.json({
      success: true,
      code: 200,
      message: '更新成功',
      data: formatResponseData(acupuncture)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      message: error.message
    });
  }
};

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

    const acupunctures = await Acupuncture.findAll({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    });

    if (acupunctures.length !== ids.length) {
      return res.status(404).json({
        success: false,
        code: 404,
        message: '部分施针记录不存在'
      });
    }

    // 删除相关的图片文件
    for (const acupuncture of acupunctures) {
      const imageUrls = JSON.parse(acupuncture.imageUrls || '[]');
      for (const imageUrl of imageUrls) {
        await deleteFile(imageUrl);
      }
    }

    await Acupuncture.destroy({
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
      data: formatResponseData(acupunctures)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      message: error.message
    });
  }
};
