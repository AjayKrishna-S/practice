const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 page not found</h1>')
})



app.listen(3000);