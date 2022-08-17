console.time('division')

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

/** Count the same console.log */
console.count('default');
console.count('remo');
console.count('rj');
console.count('remo');
console.countReset('remo'); //remo=1
console.count('remo');
console.count('rj');
// console.count();	


/** console.error() */
let x = 2;
let y = 5

if(x/y === 2){

}else{
    console.error("Error: Error in Position Operands")
}

const server = http.createServer((res, req)=>{
    
    
    res.writeHead(200, {"Content-Type":"text/plain"})

    /** Console clear */

res.end();

});

console.timeEnd('division')

server.listen(3000,()=>{
    console.log("Server is running on 3000");
})