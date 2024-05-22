const jwt = require('jsonwebtoken')

const jwtFunction = (req, res, next) => {
    console.log("inside jwt");

    const token = req.header.headers.authorization.split(' ')[1]
    try {

        if (token) {
            const result = jwt.verify(token, process.env.secrect_key)
            console.log(result);
             req.payload=result.userId
            next()


        }
        else{
            res.status(406).json("Please login ")
        }

    }
    catch(err){
        res.status(406).json(err)
    }

   

}

module.exports=jwtFunction