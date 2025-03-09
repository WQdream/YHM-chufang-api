const { DataTypes } = require('sequelize');
const { nanoid } = require('nanoid');
const sequelize = require('../config/database');

const Prescription = sequelize.define('Prescription', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => nanoid()
  },
  patientName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '患者姓名'
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '年龄'
  },
  gender: {
    type: DataTypes.ENUM('男', '女'),
    allowNull: false,
    comment: '性别'
  },
  prescriptionDate: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '开方时间'
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '临床诊断'
  },
  prescription: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '药方'
  },
  imageUrl: {
    type: DataTypes.STRING,
    comment: '原档图片URL'
  },
  pairs: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '副数'
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '备注'
  }
}, {
  timestamps: true,
  paranoid: true,
  tableName: 'prescriptions'
});

module.exports = Prescription; 