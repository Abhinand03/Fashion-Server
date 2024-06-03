const mongoose= require('mongoose')

const oderSchema=mongoose.Schema({
    username:{
        type:String
    },
    phone:{
        type:Number
    },
    adress:{
        type:String,
        
    } ,
    pincode:{
        type:Number,
        
    },
    dist:{
        type:String,
        
    },
    state:{
        type:String,
        
    },
    locality:{
        type:String,
        
    },
    paymentmode:{
        type:String,
    },
    userId:{
        type:String,
    }, 
    brand:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    price:{
        type:Number,
    },
    image:{
        type:String,
    },
    razorpay_payment_id:{
        type:String,
    },
    razorpay_order_id:{
        type:String,
    },
        quantity:{
            type:Number
        }
    



    


})
const order=mongoose.model('orders',oderSchema)
module.exports=order

