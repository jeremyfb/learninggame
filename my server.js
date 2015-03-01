var prompt = require("prompt");
prompt.start();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 31337; 
function onErr(err) {
    console.log(err);
    return 1;
  }
net.createServer(function(sock){ 
    
  // We have a connection - a socket object is assigned to the connection automatically
  console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
  // Add a 'data' event handler to this instance of socket
  // "sock" is the object representing our connection. "on" is a method
  // that tells the sock object to do something when an event happens.
  // Note this is another anonymous function. This one is called when
  // there is data available on the socket.
  // Function that asks the user for input based on the question that you give it.
  prompt.get("What would you like to send?", function (err, result) {
    if (err) {onErr(err);}
    console.log(result)
    console.log('Command-line input received:');
    console.log('You put in: ' + result["What would you like to send?"]);
    sock.write(result["What would you like to send?"])
  });
  sock.on('data', function(data) {
    console.log('Client says: '  + data.toString());
    
    // Call our UI function. Note that if we were make a real server there would
    // be a lot of work here to check the data to make sure it is safe and to
    // make sure it will not cause the rest of the program to crash.
    // In code I write I make notes with some prefix to make it easy to find
    // them. like this:
    // XXX-JFB-TODO: The data variable needs to be checked for security
    //messageReceived(data);
    prompt.get("What would you like to reply with?", function (err, result) {
      if (err) {onErr(err);}
      var que = "What would you like to reply with?"
      console.log('Command-line input received:');
      console.log('You put in: ' + result[que]);
      sock.write(result[que])
    });
  }); //Note here that we close the } for the anonymous function and the ) for the sock.on call
    
  // Add a 'close' event handler to this instance of socket
  sock.on('close', function() {
    console.log(' Subscriber closed');
  });
    
}).listen(PORT, HOST);    