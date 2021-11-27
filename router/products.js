



var createError = require('http-errors')

const productsController = require("../controller/productsController")


const router = require("express").Router() 



router.post("/create",productsController.addProduct)

router.get("/list",productsController.products)




module.exports = router 
