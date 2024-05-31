const express = require('express');
const app = express();
const bodyParser = require('body-parser');          //body-parser package

app.use(bodyParser.urlencoded());               //automatically next();
const adminRoutes = require('./routes/admin')

app.use(adminRoutes)


app.listen(3000)