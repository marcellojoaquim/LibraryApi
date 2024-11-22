const express = require('express');
const router = express.Router();
const loansCtrl = require('../controllers/loans.controller');
const {verifyToken} = require('../middleware/authToken');

router.get('/find/:id',verifyToken, loansCtrl.find);
router.get('/find', verifyToken, loansCtrl.findAll);
router.post('/create',verifyToken, loansCtrl.create);

module.exports = router;