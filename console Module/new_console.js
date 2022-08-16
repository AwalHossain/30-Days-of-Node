const http = require('http');



const server = http.createServer((res, req)=>{
    
    res.writeHead(200, {"Content-Type":"text/"})
});



server.listen(3000,()=>{
    console.log("Server is running on 3000");
})