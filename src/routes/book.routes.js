const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book.controller');

router.get('/find/:id', bookCtrl.find);
router.get('/find', bookCtrl.findAll);
router.post('/create', bookCtrl.create);

module.exports = router;