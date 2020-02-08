var express = require('express');
var spotifyTools = require("./spotifyTools")

var app = express();

app.use(spotifyTools)

console.log('Listening on 8000');
app.listen(8000);