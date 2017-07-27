// server.js
// roldeguz
// 13-July-2017
// freecodecamp API projects: file metadata microservice

// init project
var express = require('express');
var app = express();

var multer = require('multer');
var upload = multer();

var api = require('./api/file-metadata.js');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

api(app, upload);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});