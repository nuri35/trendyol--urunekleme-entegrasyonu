
const axios = require('axios')

 class Products{
    constructor(params){
    
        this.value = params;
     
    }



async add(){ 
  
 
     const snc =   await axios.post(`${process.env.BASE_URL}/sapigw/suppliers/${process.env.TEDARIK_ID}/v2/products`,this.value,{
       
        auth: {
            username: process.env.API_KEY,
            password: process.env.SECRET_KEY
          },
        
     })

return snc
    

    }


    
async list(){ 
  


    const sncList =   await axios.get(`${process.env.BASE_URL}/sapigw/suppliers/${process.env.TEDARIK_ID}/products?approved=true`,{
       
        auth: {
            username: process.env.API_KEY,
            password: process.env.SECRET_KEY
          },
        
     })

return sncList
    

   }


}


module.exports =  Products




