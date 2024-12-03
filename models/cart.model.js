const mongoose = require('mongoose')

const   cartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    products:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products"
    }
},{
    timestamps:true,
})


module.exports = mongoose.model("Cart", cartSchema)