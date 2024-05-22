const users = require('../models/userModel')
const jwt= require('jsonwebtoken')

exports.userregister = async (req, res) => {

    const { username, email, password } = req.body
    console.log("inside register function");

    try {
        const existinguser = await users.findOne({ email })
        if (existinguser) {
            res.status(401).json("user already exist")
        }

        else {
            const newuser =new users({
                username,password,email,phone:"",adress:""
            })
             await newuser.save()
             res.status(200).json(newuser)


        }
    }
    catch(err){
        res.status(404).json(err)
    }

}



exports.userLogin=async(req,res)=>{
    const {email,password}=req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            console.log(existingUser);
            const token=jwt.sign({email:existingUser.email,username:existingUser.username,userId:existingUser._id},process.env.secrect_key)
            const rest={token,user:existingUser.username}
            console.log(token);
            console.log(rest);
            res.status(200).json(rest)
        }
        else{
            res.status(406).json("inavaild username/password")
        }
    }
    catch(err){
        console.log(err)
        res.status(401).json(err)
    }

}
