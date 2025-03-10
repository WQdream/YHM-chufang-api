const Acupoint = require('../models/Acupoint');
const { Op } = require('sequelize');

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
      
      // 只有当 deletedAt 存在时才添加
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
    
    // 只有当 deletedAt 存在时才添加
    if (jsonData.deletedAt) {
      formattedData.deletedAt = formatDate(jsonData.deletedAt);
    }
    
    return formattedData;
  }
  
  return data;
};

exports.create = async (req, res) => {
  try {
    const { data, type } = req.body;
    
    // 如果没有传入data，返回错误
    if (!data) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: '数据不能为空'
      });
    }

    let acupoints;
    
    // 检查是否为批量添加（data是数组）
    if (Array.isArray(data)) {
      // 批量添加
      if (data.length === 0) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: '数据不能为空'
        });
      }
      
      // 验证每个对象的name字段
      for (const item of data) {
        if (!item.name) {
          return res.status(400).json({
            success: false,
            code: 400,
            message: '穴位名称不能为空'
          });
        }
        
        // 只在追加模式（type !== 2）时检查名称是否存在
        if (type !== 2) {
          const existingAcupoint = await Acupoint.findOne({
            where: { name: item.name }
          });
          
          if (existingAcupoint) {
            return res.status(502).json({
              success: false,
              code: 502,
              message: `穴位 "${item.name}" 已存在`
            });
          }
        }
      }

      // 如果是覆盖添加（type === 2），先清空数据库
      if (type === 2) {
        await Acupoint.destroy({
          where: {},
          truncate: true // 使用 truncate 可以更快速地清空表
        });
      }
      
      acupoints = await Acupoint.bulkCreate(data);
    } else {
      // 单个添加
      if (!data.name) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: '穴位名称不能为空'
        });
      }
      
      // 只在追加模式时检查名称是否存在
      if (type !== 2) {
        const existingAcupoint = await Acupoint.findOne({
          where: { name: data.name }
        });
        
        if (existingAcupoint) {
          return res.status(502).json({
            success: false,
            code: 502,
            message: `穴位 "${data.name}" 已存在`
          });
        }
      }
      
      acupoints = await Acupoint.create(data);
    }

    res.status(200).json({
      success: true,
      code: 200,
      message: type === 2 ? '覆盖添加成功' : '添加成功',
      data: formatResponseData(acupoints)
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      code: 400,
      message: error.message
    });
  }
};

exports.getAcupoints = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, name } = req.query;
    const offset = (page - 1) * pageSize;
    
    // 构建查询条件
    const where = {};
    if (name) {
      where.name = {
        [Op.like]: `%${name}%`  // 使用 Op.like 进行模糊查询
      };
    }

    // 查询数据
    const { count, rows: acupoints } = await Acupoint.findAndCountAll({
      where,
      order: [['createdAt', 'DESC']],
      offset: parseInt(offset),
      limit: parseInt(pageSize)
    });

    res.json({
      success: true,
      code: 200,
      message: '查询成功',
      data: {
        total: count,
        list: formatResponseData(acupoints),
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

exports.update = async (req, res) => {
  try {
    const { id, name } = req.body;

    // 参数验证
    if (!id || !name) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: 'ID和名称不能为空'
      });
    }

    // 查找穴位
    const acupoint = await Acupoint.findByPk(id);
    
    if (!acupoint) {
      return res.status(404).json({
        success: false,
        code: 404,
        message: '未找到该穴位'
      });
    }

    // 检查名称是否已存在（排除当前记录）
    const existingAcupoint = await Acupoint.findOne({
      where: {
        name,
        id: { [Op.ne]: id } // 排除当前记录
      }
    });
    
    if (existingAcupoint) {
      return res.status(502).json({
        success: false,
        code: 502,
        message: `穴位 "${name}" 已存在`
      });
    }

    // 更新名称
    await acupoint.update({ name });

    res.json({
      success: true,
      code: 200,
      message: '更新成功',
      data: formatResponseData(acupoint)
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

exports.delete = async (req, res) => {
  try {
    const { ids } = req.body;

    // 参数验证
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: '请提供要删除的ID数组'
      });
    }

    // 查找要删除的记录
    const acupoints = await Acupoint.findAll({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    });

    // 检查是否所有ID都存在
    if (acupoints.length !== ids.length) {
      return res.status(404).json({
        success: false,
        code: 404,
        message: '部分穴位不存在'
      });
    }

    // 执行删除
    await Acupoint.destroy({
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
      data: formatResponseData(acupoints)
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