const http = require('http');
const fs = require('fs');

const {Console} = require('console')
const output = fs.createWriteStream('./stdout.log');
const errOutput = fs.createWriteStream("./stderr.log")

const print = new Console(output, errOutput);

const roll = 838934;
print.log('roll: %d %d', roll);
print.log("this will be stored in a file")


let value = 10;
console.log("Value : %d", value);

console.clear();

value = value*10;
console.log(value);


const server = http.createServer((res, req)=>{
    
    
    res.writeHead(200, {"Content-Type":"text/plain"})

    /** Console clear */

res.end();

});



server.listen(3000,()=>{
    console.log("Server is running on 3000");
})