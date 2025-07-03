

const app = express()
app.listen(8080,()=>{
    console.log("Server started")
})

const logger = (req,res,next)=>{
    req.msg="Hello";
    next();
};
app.use(logger);

app.get("/",(req,res)=>{
    res.end(req.msg+" World")
});

app.get("/products",logger,(req,res)=>{
    res.end(req.msg + "Products");
});


//    https://localhost:8080/john  --> Hello World
//    https://localhost:8080/cathy  --> Access Denied


const auth = (req, res, next) => {
    const name = req.params.name;
    if (name === "john") {
        next();
    } else {
        res.send("Access Denied");
    }
};

app.get("/:name", auth, (req, res) => {
    res.send("Hello world");
});


