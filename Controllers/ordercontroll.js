const order=require('../models/ordermodel')

exports.order=async(req,res)=>{

    const {username,phone,adress,pincode,dist,state,locality,paymentmode,userId,brand,title,description,quantity,
        category,price,image,razorpay_payment_id,razorpay_order_id,dstatus,deliverydate,email,color}=req.body
    try{
        const newOrder=new order({
            username,phone,adress,pincode,dist,state,locality,paymentmode,userId,brand,title,description,quantity,category,price,image,razorpay_order_id,razorpay_payment_id,dstatus,deliverydate,email,color
    
              })
              await newOrder.save()
              res.status(200).json(newOrder)


    }
    catch(err){
        console.log(err);
    }
     


}

exports.vieworder=async(req,res)=>{
    try{
        const result= await order.find()
        // console.log(result);
        if(result){
            res.status(200).json(result)
        }
        else{
            res.status(401).json("No Orders Avilable")
        }

    }
    catch(err){
        console.log(err);
        res.status(406).json(err)

    }

}

exports.userorder=async(req,res)=>{
   

    userId=req.userId
   
    try{

        const result= await order.find({userId})
        if(result){
            res.status(200).json(result)
        }
        else{
            res.status(401).json("No Orders Avilable")
        }

    }
    catch(err){
        console.log(err);
        res.status(406).json(err)

    }
}

exports.delstatus=async(req,res)=>{
    console.log(req.body);


    const {_id}=req.body
    const {dstatus}=req.body
    try{
        const result=await order.findByIdAndUpdate({_id},{dstatus},{new:true})
        await result.save()
        res.status(200).json("Delivery Status Updated")
        
        
    }
    catch(err){
        console.log(err);
        res.status(401).json(err)

    }
    

}