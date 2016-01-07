var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set up routes
require('./routes/index.js')(app, express);


//Set up static files
app.use(express.static(path.join(__dirname ,'../client')));

// Set up ports
var port = 3000
app.listen(port);

module.exports = app;