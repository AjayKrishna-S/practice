const http = require('http')
const express = require('express');


const app = express();

app.use((req,res,next)=>{
    console.log("first middle ware");
    next();
})
app.use((req,res,next)=>{
    console.log("second middle ware");
    next();
})
app.use((req,res,next)=>{
    console.log("third middle ware");
})

const server = http.createServer(app);
server.listen(3000)