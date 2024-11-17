const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');

router.post('/signup', authCtrl.signUp);
router.post('/login', authCtrl.logIn);
router.get('/find', authCtrl.find)

module.exports = router;