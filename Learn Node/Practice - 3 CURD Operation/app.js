const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
const bosyparser = require('body-parser');

app.engine('hbs',exhbs.engine({layoutsDir:'views/', defaultLayout:"main",extname:'hps'}));
app.set('view engine', 'hbs');
app.set('views','views')


app.get('/',(req,res)=>{
    let message = 'hello';
    res.render('main',{message})
})

app.listen(8000,()=>{
    console.log("listening");
})