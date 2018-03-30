// grab express
var express = require('express');
var path = require('path');
// create an express app
var app = express();


// create an express route for the home page
// http://localhost:8080/
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

//res.sendFile(__dirname + 'index.html');
});

// start the server on port 3030
app.listen(3030);
// send a message
console.log('Server has started!');
