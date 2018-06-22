var express = require("express");
var app=express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/prodMang_db');


var MongoSchema = new mongoose.Schema({
    title:{type: String, required:true, minlength:4},
    img_url:{type:String,default:""},
    price:{type:Number,required:true}
    
    },
    {timestamps:true}
)

mongoose.model("Mongo",MongoSchema);

var Mongo = mongoose.model('Mongo');
app.use(express.static(__dirname+'/prodMang/dist/prodMang'))

var bodyParser= require("body-parser");

var path =require("path");

app.use(bodyParser.json());


app.get('/api/products/:id',function(req,res){
    console.log("getting one id back",req.params.id)
    Mongo.find({_id:req.params.id},function(err,data) {
        if(err){
            res.json({message:"Error"})

        }
        else{
            res.json({message:"success",data:data})

        }
    })
})


app.put('/api/products/:id',function(req,res){
    console.log("About to update this",req.params.id)
    Mongo.update({_id:req.params.id},{$set:req.body},function(err){
        if(err){
            res.json({message:"Error"})
        }
        else{
            Mongo.find({},function(err,data){
                if(err){
                    res.json({message:"Error"})
                }
                else{
                    res.json({message:"success",data:data})
                }
            })
        }
    })
})





app.delete('/api/products',function(req,res){
    Mongo.deleteOne({id:req.params.id},function(err){
        if(err){
            res.json({message:"Error deleting"})
        }
        else{
            Mongo.find(function(err,data){
                if(err){
                    res.json({message:"Error loading after deleting"})

                }
                else{
                    res.json({message:"success",data:data})

                }
            })
        }
    })
})




app.get('/api/products',function(req,res){
    Mongo.find({},function(err,data){
        if(err){
            res.json({msg:"Error getting products"})
        }
        else{
        
            res.json({message:"success",data:data});
        }
    })

})


app.post('/api/products',function(req,res){
    // console.log("in the server adding",req.body)
    Mongo.create(req.body,function(err,data){
        if(err){
            res.json({msg:"Error adding product"})
        }
        else{
            
            
            Mongo.find({},function(err,data){
                res.json({message:"success",data:data});
            })
                    
        }

    })
})

app.all("*",(req,res,)=>{
    res.sendFile(path.resolve('./prodMang/dist/prodMang/index.html'))    
})
    app.listen(8000,function(){
        console.log("listining on port 8000")
    })
