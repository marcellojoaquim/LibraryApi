const express = require('express');
const router = express.Router();
const loansCtrl = require('../controllers/loans.controller');

router.get('/find/:id', loansCtrl.find);
router.get('/find', loansCtrl.findAll);
router.post('/create', loansCtrl.create);

module.exports = router;