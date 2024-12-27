const http = require("http");


const server = http.createServer((req, res)=>{
    console.log(req, "req");
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("hello node js from http module");
    
})

const port = 3000;

server.listen(port, ()=>{
  console.log(`Server is now listening to port ${port}`);
  
});