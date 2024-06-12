const { json } = require('express')
const product = require('../models/ProductModel')

exports.addproduct = async (req, res) => {

    const { brand, title, description, category, price, mrp, color, meterial } = req.body
    const image = req.file.filename

    try {
        const newproduct = new product({
            brand, title, description, category, price, image, mrp, meterial, color
        })
        await newproduct.save()
        res.status(200).json(newproduct)

    }
    catch (err) {
        res.status(401).json(err)

    }

}


exports.getproduct = async (req, res) => {

    const search = req.query.search;
    console.log(search);
    try {
        const query = {
            title: { $regex: search, $options: 'i' }
        }

        const result = await product.find(query)
        // console.log(result);
        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(401).json("No product Avilable")
        }

    }
    catch (err) {
        console.log(err);
        res.status(406).json(err)

    }

}

exports.deletproduct = async (req, res) => {

    const  {did}  = req.params
    console.log(did);
    
    try {
        const result = await product.findByIdAndDelete({ _id:did })
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        res.status(406).json(err)
    }
}

exports.catveiw = async (req, res) => {

    console.log(req.params);

    const { cat } = req.params
    console.log(cat);

    try {
        const result = await product.find({ category: cat })
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        res.status(406).json(err)
    }
}

exports.edit = async (req, res) => {
     const {pid}=req.body
    //  console.log(req);

     console.log(req.body);
    const { brand, title, description, category, price, mrp, color, meterial } = req.body
    const image= req?.file?.filename

    try {
        const update= await product.findByIdAndUpdate({_id:pid},{ brand, title, description, category, price, mrp, color, meterial,image},{new:true})
        await update.save()
        res.status(200).json(update)

    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
    }


    

 }

