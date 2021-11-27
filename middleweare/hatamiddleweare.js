

const errcatchım = (err,req,res,next)=>{
  
    res.json({
     
        err:err,
        
    })
    




}

module.exports = errcatchım;


