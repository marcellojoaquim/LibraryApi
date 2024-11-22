const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book.controller');
const {verifyToken} = require('../middleware/authToken');


router.get('/find/:id', bookCtrl.find);
router.get('/find', bookCtrl.findAll);
router.post('/create',verifyToken, bookCtrl.create);

module.exports = router;