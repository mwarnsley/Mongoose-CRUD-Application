// Global variables for requiring packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');
// Setting up the mongo db database
var db = 'mongodb://localhost/example';
// Port server is running on
var port = 8000;
// Open up mongo database connection
mongoose.connect(db);
// Get all books from database and display in json format
app.get('/books', function(req, res) {
  console.log('GET ALL BOOKS');
  Book.find({})
    .exec(function(err, books) {
      if (err) {
        res.send('Error has occured');
      } else {
        console.log(books);
        res.json(books);
      }
    });
});
// Send Happy Message to display to user
app.get('/', function(req, res) {
  res.send('happy to be here');
});
// Starting the server using app listen on the port specified
app.listen(port, function() {
  console.log('app listening on port: ', port);
});
