 const express = require('express');
const { request } = require('https');
 const app = express();
 const path = require('path');
 const multer = require('multer');

 app.set('views',path.join(__dirname,"views"));
 app.set('view engine', "ejs");

 var storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        // some work
        cb(null,'uploads');
    },
    filename :function(req ,file ,cb){
        cb(null, file.originalname.replace(/\.[^/.]+$/,"") + '_' + Date.now() + path.extname(file.originalname))
    }
})
 
let maxSize = 2 * 1000 * 1000;

let upload = multer({

    storage : storage,
    limits : {
        fileSize : maxSize
    },
    fileFilter : (req,file,cb) => {
        let filetype = /jpeg|jpg|png/;
        let mimetype = filetype.test(file.mimetype);
        let extname = filetype.test(path.extname(file.originalname).toLowerCase())

        if(mimetype && extname){
            return cb(null, true)
        }

        cb("Error: file upload only supports the following filetypes: " + filetype)
    }
}).single('mypic');

app.get('/',(req,res)=>{
    res.render('signup')
})

app.post('/upload',(req,res,next)=>{
    upload(req,res,(err)=>{
        if(err){
            if(err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE"){
                return res.send('Maximum file size is 2mb')
            }
            res.send(err);
        }else{
            res.send("<h1>Success. Img uploaded!</h1>")
        }
    })
})

app.listen(8080,()=>{
    console.log("s runing");
})