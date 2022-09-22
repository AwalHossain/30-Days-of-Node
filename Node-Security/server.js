var https = require('https');
const fs = require('fs')
const express = require('express');
const app = express();
const PORT = 3000;
const HOST = "localhost"
const path = require("path")
const helmet = require('helmet');

var https_options = {
  key: fs.readFileSync('key.pem', 'utf8'),
  cert: fs.readFileSync('server.crt', 'utf8')
};

/** Using helmet to prevent possible attack */
app.use(helmet());

app.get('/secret', (req, res) => {
    return res.send('Your personal secret value is 42!');
  });

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"))
})


var server = https.createServer(https_options, app).listen(PORT,()=>{

    console.log('HTTPS Server listening on %s:%s', HOST, PORT)
});