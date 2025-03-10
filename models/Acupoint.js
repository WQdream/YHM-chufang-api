const { DataTypes } = require('sequelize');
const { nanoid } = require('nanoid');
const sequelize = require('../config/database');

console.log('正在初始化 Acupoint 模型...');

const Acupoint = sequelize.define('Acupoint', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => nanoid() // 使用nanoid生成ID
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '穴位名称'
  }
}, {
  timestamps: true,  // 自动管理 createdAt 和 updatedAt
  paranoid: false,    // 启用软删除
  tableName: 'acupoints'
});

console.log('Acupoint 模型初始化完成');

module.exports = Acupoint;