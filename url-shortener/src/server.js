const express = require('express'); //makes express required
const bodyParser = require('body-parser'); //makes body_parser required
const app = express();
const port = 3000; //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true,
}));
app.use('/', require('./routes')(express));

exports.server = app.listen(port, function(){
   console.log('This server is active on ', port);
 });
