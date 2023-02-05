const socketIO = require('socket.io');
const socket = {};

function connect(server){
    socket.io = socketIO(server, {
        allowRequest: (req, callback) => {
            const noOriginHeader = req.headers.origin === undefined;
            callback(null, noOriginHeader);
        }
    });
}

module.exports = {
    connect,
    socket,
}