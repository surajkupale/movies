const express = require('express');
const mongoose = require('mongoose');
var postroute = require('./route/routes');
var bodyParser = require('body-parser') 

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
var url = 'mongodb+srv://surajkupale:suraj1234@cluster0-nwvre.mongodb.net/mydbs?retryWrites=true&w=majority';
app.use('/movielist',postroute);
mongoose.connect(url,{ useNewUrlParser: true},function(err){
if(err) throw err;
console.log("connected to DataBase");
});

app.listen(3000,function(err){
    if(err) throw err;
    console.log("connected to 3000");
});