const express = require('express');
const router = express.Router();
const chineseMedicineController = require('../controllers/chineseMedicineController');

// 查询所有中药材
router.get('/getMedicines', chineseMedicineController.getMedicines);

// 创建中药材
router.post('/create', chineseMedicineController.create);

// 更新中药材
router.post('/update', chineseMedicineController.update);

// 删除中药材（支持单个和批量）
router.post('/delete', chineseMedicineController.delete);

module.exports = router; 