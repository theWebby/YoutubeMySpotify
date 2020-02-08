//TODO: escape "" in song names
// const clientId = '7d6e6d5684a3404e834793cca7f8382d';
// const clientSecret = '18cdd7e2215e40289d5475f71b53eb5e';

/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var config = require('config-yml');
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var DOMParser = require('html-dom-parser');
// const puppeteer = require('puppeteer');
var WebSocket = require('ws');
var http = require('http');
var request = require("request");

var client_id = process.env.spotifyClientId || config.spotify.clientId;
var client_secret = process.env.spotifyClientSecret || config.spotify.clientSecret; 
var redirect_uri = 'http://' + config.url + ':80/callback'; 

// var pb, pp;
// (async () => {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     pb = browser;
//     pp = page;
// })();



/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser()
);

app.get('/login', function(req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email user-read-currently-playing user-read-playback-state';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

function getSourceAsDOM(url){

    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    // parser=new DOMParser();
    // console.log(xmlhttp.responseText)
    return DOMParser(xmlhttp.responseText,"text/html");
}

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
    q = q.replace(/ /g, '+')
    q = q.replace(/&/g, '%26')
    q = q.replace(/Ø/g, '')
    console.log('search q:', q)

    getTopResult(q, callback)

    // var key = process.env.googleApiKey || config.google.apiKey;
    // console.log("Finding video...");
    // var youtubeSearch = 'https://content.googleapis.com/youtube/v3/search?q=' + q + '&maxResults=1&part=snippet&key=' + key;
    // console.log(youtubeSearch)
    // console.log("###########################################################################")
    // request.get(youtubeSearch, (error, response, body) => {
    //     body = JSON.parse(body);
    //     console.log('yes its here:', body.items[0].id.videoId)
    //     callback(body.items[0].id.videoId)
    // })
}

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/watchSpotify/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

function getTopResult(q, callback){
    var url = "https://www.youtube.com/results?search_query=" + q;
    var result = "boPyHl3iptQ"
    request(
        { uri:  url},
        function(error, response, body) {
            var txt = body;

            const fs = require('fs');
            fs.writeFile("./tmp/test.html", txt, function(err) {
                
            }); 
    
            var re1='.*';	// Non-greedy match on filler
            var re2='((https://i.ytimg.com/vi/)[a-zA-Z0-9_]+)';	// Alphanum 1
    
            var p = new RegExp(re2,["i"]);
            var m = p.exec(txt);
            if (m != null)
            {
                var alphanum1=m[1].replace(m[2], '');
                console.log(m[1])
                console.log(m[2])
                console.log(m[3])
                var result = (alphanum1);
            }
            
            callback(result)
        }
    );
}

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});


function getCurrentSongId(body, callback){
    console.log("get current song id .........")
    var id = getVideoId(body.songName, body.artistName, (id) => {
        callback(id);
    })
}

var wsServer = http.createServer(express());
var wss = new WebSocket.Server({server: wsServer});

wsActions = {
    "getCurrentSongId": getCurrentSongId
}

wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
        oMessage = JSON.parse(message)

        //log the received message and send it back to the client
        // console.log('received: %s', message);
        wsActions[oMessage.action](oMessage.body, (id) => {
            ws.send(id);
        });
        // ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});



console.log('Listening on 80');
app.listen(80);
