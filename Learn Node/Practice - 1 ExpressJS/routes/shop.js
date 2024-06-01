const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','shop.html'));

})

module.exports = router;