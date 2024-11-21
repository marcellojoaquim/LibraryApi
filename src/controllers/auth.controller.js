const User = require('../models/User');
const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({
            name,
            email,
            password: await User.encryptPWD(password),
        });
        const savedUser = await newUser.save();

        const secretKey = Buffer.from(process.env.SECRETE_KEY, "base64");


        const newToken = jwt.sign(
            {  name: savedUser.name, email: savedUser.email }, 
            secretKey,
            { expiresIn: "1h" } 
        );

        res.status(200).json({ token: newToken });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ message: "Erro ao criar usuário" });
    }
};


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
  console.log("Login: ",existsUser);
  const secretKey = Buffer.from(process.env.SECRETE_KEY, "base64");

  const token = jwt.sign(
    { id: existsUser._id, name: existsUser.name, email: existsUser.email }, 
    secretKey,
    { expiresIn: "1h" } 
);


  return res.json({
    _id: existsUser._id,
    name: existsUser._id,
    Address: existsUser.Address,
    message: 'Success',
    token: {token}
  })

}

