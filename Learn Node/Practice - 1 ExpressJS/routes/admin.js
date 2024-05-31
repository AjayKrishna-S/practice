const express = require('express')
const router = express.Router();

router.get('/add-product',(req,res,next)=>{     //middle ware
    console.log("first middle ware");
    res.send('<h1>Hello</h1><form action="/store-product" method="POST"><input type="text" name="message" /> <input type="submit" /> ');
    next();
})

router.post('/store-product',(req,res,next)=>{     //middle ware
    console.log('form data: ',req.body);
    res.send('<h1>Hello</h1>');
})

module.exports = router;
