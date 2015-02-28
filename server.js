// This file defines the chat server. It's job is to listen on a port
// and accept incoming connections. Currently we only support one connection
// at a time. 
// It reads from a connected socket and calls the UI function messageReceived
// I've added comments to explain some of the oddities of JavaScript.
var net = require('net');

//Our only global variables. These are place holders for now until we decide
//to build command line arguments and/or configuration files. 
//ALL CAPS is usually shorthand to represent constants, they should not change
var HOST = '127.0.0.1'; // This is the IP address of the server, localhost
var PORT = 31337;       // This is the port we are listening on.

// The top level function here is net and has a method called createServer
// createServer takes one argument and that is a function. This function is 
// called every time a new connection is received. The "sock" argument is an
// object that represents that new connection. 
// Pay attention to the parentheses. We define the function called by create 
// server at the same time we are passing it as an argument. 
// This means it is an anonymous function.
//  The function passed to net.createServer() becomes the event handler for 
// the 'connection' event.
net.createServer(function(sock) {
    
  // We have a connection - a socket object is assigned to the connection automatically
  console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
  // Add a 'data' event handler to this instance of socket
  // "sock" is the object representing our connection. "on" is a method
  // that tells the sock object to do something when an event happens.
  // Note this is another anonymous function. This one is called when
  // there is data available on the socket.
  sock.on('data', function(data) {
    console.log('DATA ' + sock.remoteAddress + ': ' + data);
    
    // Call our UI function. Note that if we were make a real server there would
    // be a lot of work here to check the data to make sure it is safe and to
    // make sure it will not cause the rest of the program to crash.
    // In code I write I make notes with some prefix to make it easy to find
    // them. like this:
    // XXX-JFB-TODO: The data variable needs to be checked for security
    messageReceived(data);
        
  }); //Note here that we close the } for the anonymous function and the ) for the sock.on call
    
  // Add a 'close' event handler to this instance of socket
  sock.on('close', function(data) {
    console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
  });
    
}).listen(PORT, HOST);
// ^^^ See here the } ends the connect event anonymous function.
//     The ) ends the createServer function.
//     The create server function returns a server object
//     The server object has a method called 'listen' that starts the server
//     listening on the host and port. 

