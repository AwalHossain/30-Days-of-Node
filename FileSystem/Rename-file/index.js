const fs = require('fs');
let dir = require('path')
// let dir = require('')
function rename (req, res){
   
}



const http = require('http');
const port = 3000
// const rename = 
var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});

    let name = (dir.join(__dirname));
    fs.rename('file.txt','updated.txt',(err)=>{
        if(err){
            throw err
        }

        res.end("fiel has been changes")
    })
    
  });



  server.listen(port, (error) => {  
    if (error) {
        return console.log('Error occured : ', error );
      }
    console.log('server is listening on '+':'+ port)
    ;})

