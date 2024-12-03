const Cart = require("../models/cart.model")
const asyncHandle = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')  


exports.getAllCarts = asyncHandle(async (req,res,next)=>{
    const carts = await Cart.find()
    if(!carts){
        return next (new ErrorResponse('mavjud emas', 404))
    }
    res.status(200).json({
        success:true,
        count:carts.length,
        data:carts,
    })
}) 


exports.createNewCart = asyncHandle(async (req,res,next)=>{
    const {name,price} = req.body;
    if(!name || !price){
        return next(new ErrorResponse("Please provie a name and price",400))
    }
    if(!req.file){
        return next(new ErrorResponse("Please provie a image",400))
    }
    const imagepath =`/uploads/${req.file.filename}`
    const newcart =await Cart.create({
        name,
        price,
        image:imagepath,
    })
    res.status(201).json({
        success:true,
        data:newcart,
    })
})


exports.getCartById = asyncHandle(async(req,res,next)=>{
    const cart = await Cart.findById(req.params.id);
    res.status(200).json({
        success:true,
        data:cart
    })
})

exports.deletebyid = asyncHandle(async (req,res,next)=>{
    const cart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true,
        data:cart,
    })
})

exports.updatebyid = asyncHandle(async (req,res,next)=>{
    const cart = await Cart.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true

    });
    res.status(200).json({
        success:true,
        data:cart,
    })
})