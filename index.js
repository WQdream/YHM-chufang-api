const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const ChineseMedicine = require('./models/ChineseMedicine');
const os = require('os');
const chineseMedicinesRouter = require('./routes/chineseMedicines');
const prescriptionsRouter = require('./routes/prescriptions');
const fileUpload = require('express-fileupload');
const path = require('path');
const commonRoutes = require('./routes/commonRoutes');
const acupointsRouter = require('./routes/acupoints');
const acupuncturesRouter = require('./routes/acupunctures');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  createParentPath: true,
  limits: {
    fileSize: 5 * 1024 * 1024 // 限制文件大小为5MB
  }
}));

// 静态文件服务
app.use('/temp', express.static(path.join(__dirname, 'public/temp')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// 路由
app.use('/api/auth', authRoutes);
app.use('/api/chinese-medicines', chineseMedicinesRouter);
app.use('/api/prescriptions', prescriptionsRouter);
app.use('/api/common', commonRoutes);
app.use('/api/acupoints', acupointsRouter);
app.use('/api/acupunctures', acupuncturesRouter);

// 数据库连接测试
sequelize.authenticate()
  .then(() => {
    console.log('数据库连接成功');
    // 使用 force: true 会删除已存在的表
    // return sequelize.sync({ force: true });
    
    // 不带参数，只在表不存在时创建表
    return sequelize.sync();

    // 使用 alter: true 只会更新表结构，不会删除数据
    // return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('数据库模型同步成功');
  })
  .catch(err => {
    console.error('数据库连接失败:', err);
  });

// 示例路由
app.get('/', (req, res) => {
  res.json({ message: '服务器运行正常' });
});

// 获取本机IP地址的函数
const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost';
};

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const ip = getLocalIP();
  console.log(`服务器运行在: http://${ip}:${PORT}`);
});