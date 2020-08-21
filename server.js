var express = require('express');
var app = express();


const path = require('path');
app.use(express.static('public'));


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const index = path.join(__dirname, '/', '../assignment1-task2', 'index.html' );
  res.sendFile(index);
});

var server = app.listen(5000, function () {
    console.log('Listen 5000 : Node server is running..');
});