const User = require('../models/User');
const Address  = require('../models/Address');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  const {name, email, password} = req.body;
  const newUser = new User({
    name, email, password: await User.encryptPWD(password)
  })
  const savedUser = await newUser.save();

  const newToken = jwt.sign({id: savedUser._id}, 'secretKey', {
    expiresIn: 60000
  })

  res.status(200).json({newToken})
}

exports.logIn = async (req, res) => {
  const existsUser = await User.findOne({email: req.body.email});
  if(!existsUser) return res.status(400).json({
    message: 'User not exists'
  })
  const matchPassword = await User.comparePWD(req.body.password, existsUser.password)

  if(!matchPassword) return res.status(401).json({
    token: null,
    message: 'Invalid password'
  })
  console.log(existsUser);

  const token = jwt.sign({id: existsUser._id}, 'secretKey', {
    expiresIn: 60000
  })


  return res.json({
    _id: existsUser._id,
    name: existsUser._id,
    Address: existsUser.Address,
    message: 'Success',
    token: token
  })

}

exports.find = async (req, res) =>{
  const user = await User.findOne({include:{model:Address}})
  return res.status(200).json(user)
  
}