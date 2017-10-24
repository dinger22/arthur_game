const WebSocket = require("ws");
const url = require('url');
var GameRoom = require('../GameComponment/GameRoom.js')
var rooms = [];

function MainApp(server){
    const wss = new WebSocket.Server({server: server});
    wss.on('connection', function connection(ws, req) {
        const location = url.parse(req.url, true);
        // You might use location.query.access_token to authenticate or share sessions
        // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
        //console.log(location);
        ws.on('message', function incoming(message) {

            if (message === 'create'){
                var room = new GameRoom({
                    totalPlayers: 7,
                    evilPlayers: 3,
                    roles: [1,2,4,5,7,3,3]
                  });
                
                rooms[room.roomID] = room;

                ws.send(JSON.stringify(room));
            }
            else {//if join a specific room
                var roomNumber = JSON.parse(message);
                console.log(JSON.stringify(rooms[roomNumber.roomNum]));
            }
            
        });
    });
}

module.exports = MainApp;