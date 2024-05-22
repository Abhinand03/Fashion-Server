
const express=require('express')
const usercontroller=require('../Controllers/userController')
const router=express.Router()



router.post('/register',usercontroller.userregister)
router.post('/login',usercontroller.userLogin)


module.exports=router