/**
 * Common file for testing all the nodejs method
 */

/** Dependencies */

const http = require('http');
const port = 3000
const fs = require('fs');
const rename = require('./Rename-file/index');
// const rename = 
var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});

    rename(req, res);
    
  });



  server.listen(port, (error) => {  
    if (error) {
        return console.log('Error occured : ', error );
      }
    console.log('server is listening on '+':'+ port)
    ;})