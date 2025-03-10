const { DataTypes } = require('sequelize');
const { nanoid } = require('nanoid');
const sequelize = require('../config/database');

const Acupuncture = sequelize.define('Acupuncture', {
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
  acupunctureDate: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '施针时间'
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '临床诊断'
  },
  acupoints: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '穴位'
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '备注'
  }
}, {
  timestamps: true,
  paranoid: true,
  tableName: 'acupunctures'
});

module.exports = Acupuncture;