import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server Started")
});
app.use(express.json());
let products=[];
app.post("/",(req,res)=>{
    const {id,name,price} = req.body;
    const obj={
        id:id,
        name:name,
        price:price,
    };
    products.push(obj);
    res.json({message: "Product Created"});

});
app.get("/",(req,res)=>{
    res.json(products);
})

app.delete("/:id",(req,res)=>{
    const id = req.params.id;
    products = products.filter(products=> products.id !== id);
    res.json("Product Deleted");
});

