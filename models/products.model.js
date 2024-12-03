const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
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
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    }
},{
    timestamps:true,
})


module.exports = mongoose.model("Products", productSchema)