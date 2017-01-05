
var express = require('express'); //makes express required
var body_parser = require('body-parser'); //makes body_parser required
var app = express();
var port = 3000; //

app.use('/api', require('../routes/api.js')(express));

 var server = app.listen(port, function(){
   console.log('This server is active on ', port);
 });

module.exports = server;
