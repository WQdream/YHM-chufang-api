const express = require('express');
const router = express.Router();
const acupunctureController = require('../controllers/acupunctureController');

// 查询施针记录
router.get('/getAcupunctures', acupunctureController.getAcupunctures);

// 创建施针记录
router.post('/create', acupunctureController.create);

// 更新施针记录
router.post('/update', acupunctureController.update);

// 删除施针记录
router.post('/delete', acupunctureController.delete);

module.exports = router;