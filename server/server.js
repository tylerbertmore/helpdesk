const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;


//---------------------------------------------------
//                     Middleware                
//---------------------------------------------------
app.use(express.static(__dirname + '/public'));
const ctrl = require('./controllers');
const db = require('./models');             
app.use(methodOverride('_method'));

app.use(require('express-session')({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true, // what does this do?
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

// MORGAN REPLACEMENT
app.use((req, res, next) => {
  const method = req.method;
  const path = req.url;
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${method} ${path} ${timestamp}`);
  next(); // Allow the request to move on to the next middleware in the chain
});

app.use(cors());
app.use(express.json());



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})