const express = require('express');
const router = express.Router();
const commonController = require('../controllers/commonController');

// 统一的文件上传接口
router.post('/upload', commonController.upload);

// 密码加密解密接口
router.post('/handle-password', commonController.handlePassword);

module.exports = router; 