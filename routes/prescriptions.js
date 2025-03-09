const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController');

// 查询处方
router.get('/getPrescriptions', prescriptionController.getPrescriptions);

// 创建处方
router.post('/create', prescriptionController.create);

// 更新处方
router.post('/update', prescriptionController.update);

// 删除处方
router.post('/delete', prescriptionController.delete);

module.exports = router; 