var https = require('https');
const fs = require('fs')
const express = require('express');
const PORT = 3000;
const HOST = "localhost"
const path = require("path")
const helmet = require('helmet');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
// const cookieSession = require('cok');
const { verify } = require('crypto');
const cookieSession = require('cookie-session');
require('dotenv').config();

var https_options = {
  key: fs.readFileSync('key.pem', 'utf8'),
  cert: fs.readFileSync('server.crt', 'utf8')
};

/** Using helmet to prevent possible attack */


const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Google profile', profile);
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));


// Save the session to the cookie
passport.serializeUser((user, done)=>{
  done(null, user.id);
})

// Read the session from the cookie
passport.deserializeUser((id, done)=>{
  done(null, id);
})

const app = express();

app.use(helmet());
app.use(cookieSession({
  name:"session",
  maxAge: 24*60*60*1000,
  keys:[config.COOKIE_KEY_1, config.COOKIE_KEY_2]
}))
// app.use(cookieSession({
//   name: 'session',
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [ config.COOKIE_KEY_1, config.COOKIE_KEY_2 ],
// }));
app.use(passport.initialize());
app.use(passport.session())

function checkLoggedIn(req, res, next) { 
  console.log('Current user is:', req.user);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'You must log in!',
    });
  }
  next();
}

app.get('/auth/google', 
  passport.authenticate('google', {
    scope: ['email','profile'],
  }));

app.get('/auth/google/callBack', 
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: true,
  }), 
  (req, res) => {
    console.log('Google called us back!');
  }
);

app.get('/auth/logout', (req, res) => {
  req.logout(); //Removes req.user and clears any logged in session
  return res.redirect('/');
});

app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 42!');
});

app.get('/failure', (req, res) => {
  return res.send('Failed to log in!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var server = https.createServer(https_options, app).listen(PORT, () => {

  console.log('HTTPS Server listening on %s:%s', HOST, PORT)
});