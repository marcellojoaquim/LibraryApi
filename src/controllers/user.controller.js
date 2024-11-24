const User = require('../models/User');
const Address  = require('../models/Address');
const LoansBook = require('../models/LoansBook')
const { where } = require('sequelize');

exports.find = async (req, res) =>{
  const user = await User.findAll({include:{model:Address}})
  return res.status(200).json(user)
}

exports.update = async (req, res) => {
  const id = req.params.id;
  const user = User.findOne({
    where: {id: id}
  }).then(user => {
    if(user != undefined){
      user.name = req.body.name
      user.email = req.body.email
      user.password = req.body.password
      user.save();
      return res.status(200).json(user);
    }else{
      return res.status(404).json({message: 'Not found'})
    }
  })
}