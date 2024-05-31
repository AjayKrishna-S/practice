const express = require('express')
const router = express.Router();
const path = require('path')

router.get('/add-product',(req,res,next)=>{
    console.log("first middle ware");
    res.sendFile(path.join(__dirname,'..','view','add-product.html'));
})

router.post('/store-product',(req,res,next)=>{
    console.log('form data: ',req.body);
    res.sendFile(path.join(__dirname,'..','view','store-product.html'));
})

module.exports = router;