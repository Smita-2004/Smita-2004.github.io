import http from 'http'
const server = http.createServer((req,res)=>{
    res.end("HIII");
})
server.listen(8080,()=>{
    console.log("server started")
})