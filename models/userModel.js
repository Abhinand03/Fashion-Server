const mongoose=require('mongoose')

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
        type:String,
        
    },
    adress:{
        type:String,
        
    }
   
})
   

const user=mongoose.model('users',userSchema)

module.exports=user
