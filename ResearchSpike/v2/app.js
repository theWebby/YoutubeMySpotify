var express = require('express'); // Express web server framework
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var request = require("request");
var util = require('../util.js')
// var http = require('http');


/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser()
);

var spotifyTools = require("./spotifyTools")
app.use(spotifyTools)

app.post('/getVideoId', function(req, res){
    songName = req.body.songName;
    artistName = req.body.artistName;

    getVideoId(songName, artistName, (videoId) => {
        res.send({videoId:videoId})
    })
});

function getVideoId(songName, artistName, callback){
    var q = songName + ' ' + artistName + ' music video';
    console.log('q:', q)
    q = q.replace(/[^a-zA-Z1-9 ]+/g, "")
       
    getTopResult(q, callback)
}



function getTopResult(q, callback){
    var url = "https://www.youtube.com/results?search_query=" + q;
    console.log(url)
    var result = "boPyHl3iptQ"
    request(
        { uri:  url},
        function(error, response, body) {
            var txt = body;

            util.LOG("./logs/last_YT_html.html", txt); 
    
            var re1='.*';	// Non-greedy match on filler
            var re2='((https://i.ytimg.com/vi/)[a-zA-Z0-9-_]+)';	// Alphanum 1
    
            var p = new RegExp(re2,["i"]);
            var m = p.exec(txt);
            if (m != null)
            {
                var alphanum1=m[1].replace(m[2], '');
                var result = (alphanum1);
            }
            
            callback(result)
        }
    );
}




console.log('Listening on 80');
app.listen(80);
