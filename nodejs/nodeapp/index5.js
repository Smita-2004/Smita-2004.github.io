import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server Started")
});

app.post("/",(req,res)=>{
    res.json(req.body);
});