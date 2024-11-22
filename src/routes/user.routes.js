const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const authToken = require('../middleware/authToken');

router.get('/find',authToken, userCtrl.find);
router.put('/update/:id',authToken, userCtrl.update);
  
module.exports = router;