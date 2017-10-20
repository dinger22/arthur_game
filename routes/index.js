var express = require('express');
var router = express.Router();

var gameApp = require('../gameApp/main.js');

var GameRoom = require('../gameComponment/GameRoom.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
