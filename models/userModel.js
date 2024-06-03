const mongoose=require('mongoose')
const product = require('./ProductModel')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    googleId:{
        type:String

    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        
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
    
   
})
   

const user=mongoose.model('users',userSchema)

module.exports=user
