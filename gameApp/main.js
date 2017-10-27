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
        ws.on('message', function incoming(message) {
            var result = JSON.parse(message);
            if (result.Action === 'create'){
                var room = new GameRoom({
                    TotalPlayers: result.TotalPlayers,
                    EvilPlayers: result.EvilPlayers,
                    roles: [1,2,4,5,7,3,3]//TODO: Shuffle array
                  });
                
                rooms[room.roomID] = room;

                ws.send(room.roomID);
            }
            else if(result.Action === 'join'){
                console.log(JSON.stringify(rooms[result.RoomNum]));
            }
            
        });
    });
}

module.exports = MainApp;