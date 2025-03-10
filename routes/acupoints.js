const express = require('express');
const router = express.Router();
const acupointController = require('../controllers/acupointController');

// 查询所有穴位
router.get('/getAcupoints', acupointController.getAcupoints);

// 创建穴位
router.post('/create', acupointController.create);

// 更新穴位
router.post('/update', acupointController.update);

// 删除穴位（支持单个和批量）
router.post('/delete', acupointController.delete);

module.exports = router;