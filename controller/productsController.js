
const productApi = require("../api/productApi")



const addProduct =  async (req,res,next)=>{
  

  try{



  const api = await new productApi(req.body);
const product_add =  await api.add() 
 
res.json(product_add.data)


  }catch(err){
     next(err)
  }
 


}




const products =  async (req,res,next)=>{
  

  try{
    
  const listApi = await new productApi();
  const product_list =  await listApi.list() 
  res.json(product_list.data)

  }catch(err){
     next(err)
  }
 


}




module.exports={
    addProduct,
    products

}

