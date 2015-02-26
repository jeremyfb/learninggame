//var io = require('socket.io').listen(app);

//io.sockets.on('connection', function (socket) {
    //our other events...
//});

function sendMessage(message) {
  console.log("Message to send: " + message);
}

sendMessage("Hi!");
