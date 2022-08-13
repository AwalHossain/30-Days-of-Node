const http = require('http');




const server = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-Type":"text/json"});

    const jsonFile = {
        "name":"Awal",
        "Age": 28,
        "Institution": "JUST",
        "Aim":"...."
    }
    res.end(JSON.stringify(jsonFile))
});


server.listen(3000, ()=>{
    console.log(`Server is listening through 3000`);
})