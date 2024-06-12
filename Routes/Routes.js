
const express=require('express')
const usercontroller=require('../Controllers/userController')
const productcontroller=require("../Controllers/productcontroller")
const router=express.Router()
const multer=require('../middleware/multter')
const jwt=require('../middleware/jwt')
const addtocart=require('../Controllers/addtocartcontroller')
const ordercontroller=require('../Controllers/ordercontroll')
const razorpay=require('../Controllers/rozrpay')

//user controll
router.post('/register',usercontroller.userregister)
router.post('/login',usercontroller.userLogin)
router.put('/user-update',jwt,usercontroller.updataeuser)
router.post('/add-product',multer.single('image'),productcontroller.addproduct)
router.get('/all-product',productcontroller.getproduct)
router.delete('/deletepro/:did',productcontroller.deletproduct)
router.get('/user',usercontroller.getuser)

router.post('/cart',jwt,addtocart.addtocart)

router.get('/cartcount',jwt,addtocart.cartcount)

router.get('/cart-product',jwt,addtocart.cartview)
router.put('/upcart',jwt,addtocart.updatecart)

router.delete('/deletecart/:pid',addtocart.cartdelt)


router.post('/order',ordercontroller.order)

router.delete('/alldelt/:userId',addtocart.allcartremove)

router.post('/razorpay',razorpay.rozarpay)

router.get('/all-order',ordercontroller.vieworder)

router.get('/user-order',jwt,ordercontroller.userorder)

router.get('/cat-view/:cat',productcontroller.catveiw)

router.put('/pro-update',multer.single('image'),productcontroller.edit)

router.put('/d-status',ordercontroller.delstatus)





module.exports=router