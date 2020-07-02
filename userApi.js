//create mini express appliation to handle user requests
const exp=require("express")

const userApp=exp.Router();

//import dbo from db.js
const dbo=require('../db');
dbo.initDb();


userApp.get('/readprofile/:username',(req,res)=>{
    res.send({message:"user profile works"})
});

userApp.post('/login',(req,res)=>{
    res.send({message:"user login works"})
});

userApp.post('/register',(req,res)=>{
    res.send({message:"user register works"})
});

//export adminApp

module.exports=userApp;
