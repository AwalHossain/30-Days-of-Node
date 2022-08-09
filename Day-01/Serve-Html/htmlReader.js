/**
 * Show html file in web-browser by useing callback and promise method
 */

/** Dependencies */

const http = require('http');
const host = "127.0.2.1";
const port = 5000
const fs = require('fs')

var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World!");

    /** Promise method */
    fs.promises.readFile('index.html')
    .then(resl=> res.end(resl))
    .catch((err)=> console.log(err))

    /** Callback method */
    // fs.readFile('index.html',(err,data)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end(data);
    // })
  });



  server.listen(port,host, (error) => {  
    if (error) {
        return console.log('Error occured : ', error );
      }
    console.log('server is listening on ' + host + ':'+ port)
    ;})