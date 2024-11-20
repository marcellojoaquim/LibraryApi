const jwt = require('jsonwebtoken');
const User = require('../models/User');
require("dotenv").config();

exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({
        message: "No token provided"
    })
        const secretKey = Buffer.from(process.env.SECRETE_KEY, "base64");
        const decoded = jwt.verify(token, secretKey)
        console.log(decoded);
        
        req.userId = decoded.id;

        const user = await User.findOne({email: req.userId});
        if (!user) return res.status(404).json({
            message: "No user found"
        })
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
}