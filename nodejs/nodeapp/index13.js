import express from 'express'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const app =express();
mongoose.connect("mongodb://localhost:27017/lpu").then(()=>{
    app.listen(8080,()=>{
        console.log("Server started");
    });

});

const userSchema = mongoose.Schema({
    name : {type:String},
    email : {type:String,unique:true},
    password : {type:String},
    role : {type:String,default:"users"},
},
{timestamps:true}
);
const userModel = mongoose.model("User",userSchema)
app.post("/register",async(req,res)=>{
   try{
     const {name,email,password} =req.body;
     const hashepwd = await bcrypt.hash(password,10);
    const user = {
        name,
        email,
        password,
    }
    const result = await userModel.create(user)
    res.status(201).json(result);
   }
   catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
   }
})
