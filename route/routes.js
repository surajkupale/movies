const express = require('express');
const Moviecollection = require('../model/post'); 

const router = express.Router();
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


router.get('/',async function(req,res){
    try{
    await Moviecollection.find({}).exec(function(err,data){
        if(err) throw err;
        res.json(data);});
      
    }catch(err){
        console.log(res.json({message:err}));
    }
});

router.post('/postdata',async function(req,res) {
    console.log(req.body);
    const Post = new Moviecollection({
        name:req.body.name,
        img:req.body.img,
        summary:req.body.summary});
    try{    
     await Post.save().then(function(item){res.send(item);console.log(item);});//catch(function(err){res.send(err)});
    }catch(err){res.json(err);console.log(err);};
});
module.exports = router;