const express = require('express')
const router = express.Router();
const path = require('path')
const rootDir = require('../utils/path')

router.get('/add-product',(req,res,next)=>{
    console.log("first middle ware");
    res.sendFile(path.join(rootDir,'view','add-product.html'));
})

router.post('/store-product',(req,res,next)=>{
    res.send('<h2>Submited</h2>')
    console.log('form data: ',req.body);
})

module.exports = router;