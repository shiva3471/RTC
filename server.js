const express = require('express');
const path = require('path');
var app = express();
const port = process.env.PORT || 4000;
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/lobby.html'));
});

app.get('/room.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/room.html'));
});
var server = app.listen(port, function(){
    console.log("Listening on Port ", port);
});