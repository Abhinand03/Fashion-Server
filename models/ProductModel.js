const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
    brand:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    mrp:{
        type:Number,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    meterial:{
        type:String,
        require:true
    }


})

const product=mongoose.model('products',productSchema)
module.exports=product