var express = require('express');
var router = express.Router();

var GameRoom = require('../gameComponment/GameRoom.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  var result = new GameRoom({
    totalPlayers: 7,
    evilPlayers: 3,
    roles: [1,2,4,5,7,3,3]
  })
  console.log(JSON.stringify(result));
});

module.exports = router;
