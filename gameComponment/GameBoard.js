//var RandomHelper = require('RandomHelper');

var GameBoardEnum = require('../gameSetupHelper/GameBoardEnum'); 

class GameBoard{
    constructor(totalPlayers, evilPlayers){
        this.voteTrack = 0;
        this.steps = GameBoardEnum[totalPlayers];
        this.successSteps = 0;
        this.currentStep = 1;
        //this.currentLeader = RandomHelper(1,totalPlayers);
    }
}

module.exports = GameBoard;