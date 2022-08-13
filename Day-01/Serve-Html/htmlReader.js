/**
 * Show html file in web-browser by useing callback and promise method
 */

/** Dependencies */

const http = require('http');
// const 



const server = http.createServer((req, res)=>{

  res.writeHead(200, {"Content-Type": "text/html"});

  res.write("<h1>hello there</h1>");
  res.end("end it")
})


server.listen(3000,()=>{
  console.log(`Hey this server is runnin on 3000`);
})