const express =require('express');
const app=express();
const port=8000;
require('./database/conn')
const product_data=require('./database/product_model');

app.get('/',async(req,res)=>{
   const response= await product_data.find({});
   res.json(response)
})



app.listen(port,()=>{
    console.log(`connected`);
})