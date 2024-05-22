const mongoose=require('mongoose')

const DB=process.env.DATABASE

mongoose.connect(DB,{
   
}).then(()=>{console.log("MongoDB atlas connection successfully")}).catch((err)=>{
    console.log(err);
    console.log("MongoDB connection failed")
})