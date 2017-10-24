var RandomHelper = require('../Utilities/RandomHelper');

var GameBoardEnum = require('../GameSetupHelper/GameBoardEnum'); 

class GameBoard{
    constructor(totalPlayers, evilPlayers){
        this.voteTrack = 0;
        this.steps = GameBoardEnum[totalPlayers];
        this.successSteps = 0;
        this.currentStep = 1;
        this.currentLeader = RandomHelper.GetRandomLeader(totalPlayers);
    }
}

module.exports = GameBoard;