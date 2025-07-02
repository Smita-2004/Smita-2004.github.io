import express from 'express'

const app =express()

app.listen(8080,()=>{
    console.log("Server started")
});

// app.get("/",(req,res)=>{
//     res.end("Good morning");
// });
// app.get("/user",(req,res)=>{
//     res.end("Hello User");
// });
// app.get("/ab*cd",(req,res)=>{
//     res.end("Hello World");
// });

app.get("/products",(req,res)=>{
    const products = [
    {name:"Product 1",price:45},
    {name:"Product 2",price:70},
    {name:"Product 3",price:55},
    ]
    res.status(201).json(products);
});

// localhost:8080/john   :name-> variable (we can enter anything)
// app.get("/:name",(req,res)=>{
//     // res.end("Hello");
//     res.end(req.params.name);
// });

// app.get("/student/:name",(req,res)=>{
//     res.end(req.params.name);
// });

// app.get("/student/:name/age/:age",(req,res)=>{
//     res.end(req.params.name + " " +req.params.age);
// });

app.get("/:name/:age",(req,res)=>{
    res.end(req.params.name + " " +req.params.age);
});

// localhost:8080/john   ->error
// app.get("/name",(req,res)=>{
//     res.end("Hello");
// });