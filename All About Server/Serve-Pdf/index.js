
/**
 * Serve pdf file with readfile
 */


const http = require('http');
const fs = require('fs');




const server = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-Type":"application/pdf"});

    fs.promises.readFile('text.pdf')
    .then(resl => res.end(resl))
    .catch(err => console.log(err))
    
    // res.end(JSON.stringify(jsonFile))
});


server.listen(3000, ()=>{
    console.log(`Server is listening through 3000`);
})