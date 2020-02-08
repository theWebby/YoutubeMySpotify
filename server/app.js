var express = require('express');
var spotifyTools = require("./spotifyTools")

var app = express();

app.use(spotifyTools)

console.log('Listening on 80');
app.listen(80);