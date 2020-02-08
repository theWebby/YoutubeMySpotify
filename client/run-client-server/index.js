const express = require('express')
const bodyParser = require('body-parser');
const request = require('request')

const expressApp = express()


expressApp.use(bodyParser.urlencoded({
    extended: true
}));
expressApp.use(bodyParser.json())
expressApp.use(express.static(__dirname + '/public'));


expressApp.post('/getVideoId', function(req, res){
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
    var result = "boPyHl3iptQ"
    request(
        { uri:  url},
        function(error, response, body) {
            var txt = body;
            
            var re1='.*';	// Non-greedy match on filler
            var re2='((https://i.ytimg.com/vi/)[a-zA-Z0-9-_]+)';	// Alphanum 1
            
            var p = new RegExp(re2,["i"]);
            var m = p.exec(txt);
            if (m != null)
            {
                var alphanum1=m[1].replace(m[2], '');
                var result = (alphanum1);
            }
            
            console.log('result', result)
            callback(result)
        }
    );
}


expressApp.listen(3000)