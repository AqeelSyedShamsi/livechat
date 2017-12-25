//express initializes app

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// handler when we hit our website home

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//new instance of socket.io by passing the http

// chat message event

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
io.emit('some event', { for: 'everyone' });

// http server listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});
