const { DataTypes } = require('sequelize');
const { nanoid } = require('nanoid');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => nanoid() // 使用nanoid生成ID
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: 'username' // 指定一个固定的索引名称
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  permission: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,  // 自动管理 createdAt 和 updatedAt
  paranoid: true,    // 启用软删除，会自动创建和管理 deletedAt 字段
  tableName: 'user'
});

module.exports = User; 