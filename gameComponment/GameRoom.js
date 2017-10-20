//var RandomHelper = require('RandomHelper');

var GameBoard = require('../gameComponment/GameBoard'); 
var Role = require('../gameComponment/Role');

class GameRoom{
    constructor(configData){
        //this.roomID = randomHelper(5);
        this.totalPlayers = configData.totalPlayers;
        this.evilPlayers = configData.evilPlayers;
        this.roles = configData.roles.map((role) => {
            return new Role(role);
        });
        this.gameBoard = new GameBoard(configData.totalPlayers, configData.evilPlayers);
    }
}

module.exports = GameRoom;