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
require('dotenv').config();

var https_options = {
  key: fs.readFileSync('key.pem', 'utf8'),
  cert: fs.readFileSync('server.crt', 'utf8')
};

/** Using helmet to prevent possible attack */


const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
}

const AUTH_OPTIONS = {
  callbackURL :'/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
}


function verifyCallBack(accessToken, refreshToken, profile, done){
  console.log("Google Profile", profile);
  done(null, profile)
}

passport.use(new Strategy(
   AUTH_OPTIONS, verifyCallBack
))



app.use(helmet());
app.use(passport.initialize())



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


  app.get('/auth/google', (req, res) => {
    passport.authenticate('google',{
      scope:['email','profile']
    })
  });

app.get('/auth/google/callback', (req, res) => passport.authenticate('google',{
  failureRedirect:"/failure",
  successRedirect:"/",
  session: false
}), (req, res)=>{
  console.log("Google Called use back");
});

app.get('/auth/logout', (req, res) => {});


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"))
})


var server = https.createServer(https_options, app).listen(PORT,()=>{

    console.log('HTTPS Server listening on %s:%s', HOST, PORT)
});