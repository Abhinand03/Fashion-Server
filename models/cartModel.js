const mongoose=require('mongoose')
const product = require('./ProductModel')

const cartshema= new mongoose.Schema({
    productId:{
        ref:'products',
        type:String
    },
    quantity:{
        type:Number
    },
    userId:{
        type:String
    }
    
    
})

const cart=mongoose.model('cart',cartshema)

module.exports=cart