/**
 * append file usein file-system promise method
 */

/** Dependencies */

const http = require('http');
const port = 3000
const fs = require('fs')

var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});

    /**  */
    fs.promises.writeFile('file.txt', "this is the data file i am writing let's see w")
    .then(resl=> res.end("File has been created with data"))
    .catch((err)=> console.log(err))

  });



  server.listen(port, (error) => {  
    if (error) {
        return console.log('Error occured : ', error );
      }
    console.log('server is listening on '+':'+ port)
    ;})