const { json } = require("express")
const cart = require("../models/cartModel");
const product = require("../models/ProductModel");

exports.addtocart = async (req, res) => {

    try {
        const { _id } = req?.body

        const productId = _id
       

        const currentuser = req.userId


        const productAvil = await cart.findOne({ productId, userId: currentuser })
        console.log(productAvil);

        if (productAvil) {
            return res.json({

                message: "product already adeded",
                success: true,
                error: false
            })
        }
        else {
            const newcart = {
                productId: productId,
                quantity: 1,
                userId: currentuser


            }
            const newadtocart = cart(newcart)
            const savecart = await newadtocart.save()
            res.json({
                data: savecart,
                message: "product added",
                success: true,
                error: false
            })

        }

        // res.status(200).json(savecart)



    }

    catch (err) {
        res.status(401).json(err)

    }




}

exports.cartcount = async (req, res) => {
    const userId = req.userId

    try {
        const count = await cart.countDocuments({ userId })
        res.status(200).json(count)

    }
    catch (err) {
        res.status(401).json(err)

    }

}

exports.cartview = async (req, res) => {

    const userId = req.userId


    try {
        const cartproduct = await cart.find({ userId }).populate('productId')
        res.status(200).json(cartproduct)

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }

}
exports.updatecart = async (req, res) => {
    try {

        const currentuser = req.userId
        const upip = req.body.id
        console.log(req.body);
        const qty = req.body.quantity

      
        const upcart= await cart.findByIdAndUpdate({_id:upip},{quantity:qty},{new:true})
        await upcart.save()
        res.status(200).json(upcart)
    }
    catch(err){
       console.log(err)
        res.status(401).json(err)
    }


}

exports.cartdelt=async(req,res)=>{

    const {pid}=req.params
    try{
        const result= await cart.findByIdAndDelete({_id:pid})
        res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        res.status(406).json(err)
    }
}

exports.allcartremove=async(req,res)=>{

    const {userId}=req.params
    try{
        const result=await cart.deleteMany({userId:userId})
        res.status(200).json(result)
    }
    catch(err){
        console.log((err));
        res.status(401).json(err)

    }
}