const { DataTypes } = require('sequelize');
const { nanoid } = require('nanoid');
const sequelize = require('../config/database');

console.log('正在初始化 ChineseMedicine 模型...');

const ChineseMedicine = sequelize.define('ChineseMedicine', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => nanoid() // 使用nanoid生成ID
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '中药材名称'
  }
}, {
  timestamps: true,  // 自动管理 createdAt 和 updatedAt
  paranoid: false,    // 启用软删除
  tableName: 'chinese_medicines'
});

console.log('ChineseMedicine 模型初始化完成');

module.exports = ChineseMedicine; 