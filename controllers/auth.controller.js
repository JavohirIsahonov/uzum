const User = require("../models/user.model")
const uuid = require("uuid")
const asyncHandle = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
// @desc    Register new User
// @router  POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandle(async (req,res,next)=>{
    const {name,email,password} = req.body;
    const apiKey = uuid.v4();
    const user = await User.create({name,email,password,apiKey});
    const token = user.getJWT()
    res.status(201).json({
        success:true,
        data:user,
        token
    })
})

// @desc    Login  User
// @router  POST /api/v1/auth/login
// @access  Public
exports.login = asyncHandle(async (req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return next(new ErrorResponse("Please provie an email and password",400))
    }
    const user = await User.findOne({email});
    if(!user){
        return next(new ErrorResponse("Invalid credentials",401))

    }
    const isMatch = await user.matchPassword(password)
    if(!isMatch){
        return next(new ErrorResponse("Invalid credentials",401))
    }
    const token =user.getJWT()
    res.status(200).json({
        success: true,
        data:user,
        token
    })
})