var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/countries', require('./countries.js'));

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/main.html'));
});

module.exports = router;
