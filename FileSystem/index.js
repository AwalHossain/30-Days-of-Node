/**
 * Common file for testing all the nodejs method
 */

/** Dependencies */

const http = require('http');
const port = 5000
const fs = require('fs');
const deleteFile = require('./Delete-File/index');
// const rename = 
var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/json"});

  
    let newM =  fs.promises.unlink('c.txt')
    if(newM){
      res.write(JSON.stringify("success"))
    }


  });



  server.listen(port, (error) => {  
    if (error) {
        return console.log('Error occured : ', error );
      }
    console.log('server is listening on '+':'+ port)
    ;})