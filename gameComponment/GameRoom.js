var RandomHelper = require('../Utilities/RandomHelper');
var GameBoard = require('../GameComponment/GameBoard'); 
var Role = require('../GameComponment/Role');

class GameRoom{
    constructor(configData){
        this.roomID = RandomHelper.CreateRoomNum();
        this.totalPlayers = configData.totalPlayers;
        this.evilPlayers = configData.evilPlayers;
        this.roles = configData.roles.map((role) => {
            return new Role(role);
        });
        this.gameBoard = new GameBoard(configData.totalPlayers, configData.evilPlayers);
    }
}

module.exports = GameRoom;