const Razarpay= require('razorpay')
require('dotenv').config()


exports.rozarpay=async(req,res)=>{
     
    try{
        
    const razorpay= new Razarpay({
        key_id:process.env.key_id,
        key_secret:process.env.key_secret



    })

    const option=req.body

    const result = await razorpay.orders.create(option)
    if(!result){
        res.status(400).json("err")
    }
    else{
        res.json(result)
    }


    }
    catch(err){
        console.log(err);
        res.status(400).json(err)

    }

}