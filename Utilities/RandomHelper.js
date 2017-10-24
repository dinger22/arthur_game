var createRandomNum = function(){
    min = Math.ceil(0);
    max = Math.floor(100000);
    return Math.floor(Math.random() * 10000);
}

var getRandomLeader = function(total){
    return Math.floor(Math.random() * total) + 1;
}


module.exports = {
    CreateRoomNum: createRandomNum,
    GetRandomLeader: getRandomLeader
}