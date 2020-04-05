const express = require('express')
const bodyParser = require('body-parser');
const request = require('request')
const path = require('path')
const cors = require("cors")

const expressApp = express()
expressApp.use(cors())


expressApp.use(bodyParser.urlencoded({
    extended: true
}));
expressApp.use(bodyParser.json())
expressApp.use('/static', express.static(__dirname + '/react-app/build/static'));

expressApp.get('/', function(req, res) {
 res.sendFile(path.join(__dirname, './react-app/build', 'index.html'));
});

expressApp.get('/login', function(req, res){
    res.redirect('http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/login')
})

expressApp.post('/getVideoId', function(req, res){    
    songName = req.body.songName;
    artistName = req.body.artistName;
    
    res.header("Access-Control-Allow-Origin", "*");
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


const PORT = 3000;
console.log("server listening on", PORT)
expressApp.listen(PORT)