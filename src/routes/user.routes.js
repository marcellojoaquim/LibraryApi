const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const {verifyToken} = require('../middleware/authToken');

router.get('/find', verifyToken, userCtrl.find);
router.put('/update/:id', verifyToken, userCtrl.update);
  
module.exports = router;