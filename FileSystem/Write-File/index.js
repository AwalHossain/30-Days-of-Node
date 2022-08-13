/**
 * NodeJs day-01 content
 */

/** Dependencies */

const http = require('http');
const host = "127.0.2.1";
const port = 3000
const fs = require('fs')

var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});

    /** Promise m */
    fs.promises.writeFile('file.txt', "this is the data file i am writing let's see w","odo")
    .then(resl=> res.end("File has been created with data"))
    .catch((err)=> console.log(err))

    /** Callback method */
    // fs.readFile('index.html',(err,data)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end(data);
    // })
  });



  server.listen(port, (error) => {  
    if (error) {
        return console.log('Error occured : ', error );
      }
    console.log('server is listening on '+':'+ port)
    ;})