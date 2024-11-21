const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const authToken = require('../middleware/authToken');

router.get('/find',[authToken.verifyToken], userCtrl.find);
router.put('/update/:id', userCtrl.update);
  
module.exports = router;