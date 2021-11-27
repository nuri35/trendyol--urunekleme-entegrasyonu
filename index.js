require('dotenv').config()
const express = require("express")

const hatamıddleweare = require("./middleweare/hatamiddleweare")

const routerProduct = require("./router/products")


const app = express();



app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use("/products",routerProduct)





app.use(hatamıddleweare)




app.listen(5000,()=>{
    console.log("bu port dınlenıyor")
})

