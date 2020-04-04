var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('send', function(msg){
        console.log('received test call')
        io.emit('receive', msg);
    });
});
  
server.listen(3000, function(){
    console.log('listening on *:3000');
});