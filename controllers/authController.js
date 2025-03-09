const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // 参数验证
    if (!username || !password) {

      return res.status(400).json({
        code: 400,
        message: '用户名和密码不能为空'
      });
    }

    // 查找用户
    const user = await User.findOne({ where: { username } });
    
    if (!user) {
      return res.status(500).json({
        code: 500,
        message: '用户名或密码错误'
      });
    }
    
    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(500).json({
        code: 500,
        message: '用户名或密码错误'
      });
    }

    // 生成token
    const token = jwt.sign(
      { 
        id: user.id,
        username: user.username 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      code: 200,
      message: '登录成功',
      data: {
        token,
        user: {
          id: user.id,
          username: user.username,
        }
      }
    });

  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({
      code: 500,
      message: '服务器错误'
    });
  }
};

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // 参数验证
    if (!username || !password) {
      return res.status(400).json({
        code: 400,
        message: '用户名和密码不能为空'
      });
    }

    // 检查用户是否已存在
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({
        code: 400,
        message: '用户名已存在'
      });
    }

    // 密码加密
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 创建用户
    const user = await User.create({
      username,
      password: hashedPassword,
      email
    });

    res.status(201).json({
      code: 200,
      message: '注册成功',
      data: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error('注册错误:', error);
    res.status(500).json({
      code: 500,
      message: '服务器错误'
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    const { count, rows } = await User.findAndCountAll({
      attributes: ['id', 'username', 'avatar', 'permission', 'createdAt', 'updatedAt', 'deletedAt'],
      order: [['createdAt', 'DESC']],
      offset,
      limit: pageSize
    });

    res.json({
      code: 200,
      message: '获取用户列表成功',
      data: {
        total: count,
        page,
        pageSize,
        list: rows
      }
    });

  } catch (error) {
    console.error('获取用户列表错误:', error);
    res.status(500).json({
      code: 500,
      message: '服务器错误'
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        code: 404,
        message: '用户不存在'
      });
    }

    await user.destroy(); // 这会自动设置 delete_time

    res.json({
      code: 200,
      message: '删除成功'
    });

  } catch (error) {
    console.error('删除用户错误:', error);
    res.status(500).json({
      code: 500,
      message: '服务器错误'
    });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const { username } = req.query;  // 从 query 中获取参数

    if (!username) {
      return res.status(400).json({
        code: 400,
        message: '用户名不能为空'
      });
    }

    // 查找用户
    const user = await User.findOne({ 
      where: { username },
      attributes: { exclude: ['password'] } // 排除密码字段
    });

    if (!user) {
      return res.status(404).json({
        code: 404,
        message: '用户不存在'
      });
    }

    res.json({
      code: 200,
      message: '获取用户信息成功',
      data: user
    });

  } catch (error) {
    console.error('获取用户信息错误:', error);
    res.status(500).json({
      code: 500,
      message: '服务器错误'
    });
  }
};

module.exports = {
  login,
  register,
  getAllUsers,
  deleteUser,
  getUserInfo
}; 