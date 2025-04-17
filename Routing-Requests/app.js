const http = require('http');

const express = require('express');

const app = express();
app.use('/add-product',(req, res, next) =>{
    res.send('<h1>Add Product Page</h1>');
});

app.use('/',(req, res, next) =>{
    console.log("Middleware too");
    res.send('<h1> Hello from Express.js </h1>');
    
});



app.listen(3000);