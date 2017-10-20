const WebSocket = require("ws");
const url = require('url');
var gameRoom = require('../gameComponment/GameRoom.js')
var rooms = [];
function mainApp(server){
    const wss = new WebSocket.Server({server: server});
    wss.on('connection', function connection(ws, req) {
        const location = url.parse(req.url, true);
        // You might use location.query.access_token to authenticate or share sessions
        // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
        //console.log(location);
        ws.on('message', function incoming(message) {
            if (message === 'create'){
                rooms[0] = new gameRoom({
                    totalPlayers: 7,
                    evilPlayers: 3,
                    roles: [1,2,4,5,7,3,3]
                  });
                console.log('received: %s', JSON.stringify(rooms[0]));
            }
            else if (message === 'join0'){
                rooms[0].roles.name = 'dingding'
                console.log('received: %s', rooms[0].roles.name);
            }
            
        });

        ws.send('something');
    });
}

module.exports = mainApp;