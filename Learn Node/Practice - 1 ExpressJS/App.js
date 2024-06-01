const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'view','404.html'))
})



app.listen(3000);