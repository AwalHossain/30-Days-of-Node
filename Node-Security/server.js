var https = require('https');
const fs = require('fs')
const express = require('express');
const app = express();
const PORT = 3000;
const HOST = "localhost"
const path = require("path")
const helmet = require('helmet');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');


var https_options = {
  key: fs.readFileSync('key.pem', 'utf8'),
  cert: fs.readFileSync('server.crt', 'utf8')
};

/** Using helmet to prevent possible attack */
app.use(helmet());


const config = {
  CLIENT_ID:
  CLIENT_SECRET
}

passport.use(Strategy, ({
    // clientID:
}))





app.get('/secret', (req, res) => {
    return res.send('Your personal secret value is 42!');
  });

  function checkLoggedIn(req, res, next) {
    const isLoggedIn = true; //TODO
    if (!isLoggedIn) {
      return res.status(401).json({
        error: 'You must log in!',
      });
    }
    next();
  }


  app.get('/auth/google', (req, res) => {});

app.get('/auth/google/callback', (req, res) => {});

app.get('/auth/logout', (req, res) => {});


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"))
})


var server = https.createServer(https_options, app).listen(PORT,()=>{

    console.log('HTTPS Server listening on %s:%s', HOST, PORT)
});