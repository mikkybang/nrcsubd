const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const crosserRoutes = require('./routes/crosser');
const adminRoutes = require('./routes/admin');
// create our Express app
const app = express();

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// After allllll that above middleware, we finally handle our own routes!
app.use('/crosser', crosserRoutes);
app.use('/admin', adminRoutes)

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})





module.exports = app;