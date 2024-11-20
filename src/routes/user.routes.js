const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

router.get('/find', userCtrl.find);
router.put('/update/:id', userCtrl.update);
  
module.exports = router;