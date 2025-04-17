const http = require('http');

const express = require('express');

const app = express();

app.use('/users',(req, res, next) =>{
    console.log("deneme")
    res.send('<h1> You are reached the user page</h1>');
});

app.use('/',(req, res, next) =>{
    console.log("/ url reached");
    
    res.send('<h1> You are trying to reach / url</h1>');
    
});


app.listen(2080);