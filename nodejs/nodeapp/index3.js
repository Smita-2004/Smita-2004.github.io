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

 const products = [
    {id:1 ,name:"Product 1",price:45},
    {id:2 ,name:"Product 2",price:70},
    {id:3 ,name:"Product 3",price:55},
    ];


app.get("/products",(req,res)=>{
    res.json(products);
    
});

app.get("/products/:id",(req,res)=>{
    const pid = req.params.id;
    res.json(id);
    
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


// app.get("/:name/:age",(req,res)=>{
//     res.end(req.params.name + " " +req.params.age);
// });


// localhost:8080/john   ->error
// app.get("/name",(req,res)=>{
//     res.end("Hello");
// });

// app.get("/",(req,res)=>{
//     res.end(req.headers.authorization);
// })


// localhost:8080/?name=smita
// app.get("/",(req,res)=>{
//     res.end(req.query.name + " " + req.query.age);
// })