var express = require('express');
var app = express();
var countryRouter = express.Router();
var path = require('path')

countryRouter.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/main.html'))
});

module.exports = countryRouter;

