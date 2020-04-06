var { Router } = require('express')
var querystring = require('querystring');
var request = require('request'); // "Request" library

const URI = 'https://youtubemyspotify.uk/';
const CLIENT_URL = 'https://thewebby.github.io/YoutubeMySpotify/#/AccountManager/'

var authRouter = Router()
var Oauth = {
  client_id: process.env.SPOTIFY_CID,
  client_secret: process.env.SPOTIFY_SECRET,
  URI,
  redirect_uri: URI + 'callback'
}


var stateKey = 'spotify_auth_state';
var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

authRouter.get('/login', function (req, res) {
  var clientUrl = req.query.clientUrl  || null;
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // client application requests authorization
  var scope = 'user-read-private user-read-email user-read-currently-playing user-read-playback-state user-modify-playback-state';
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Cache-Control", "no-store");
  res.header("Cache-Control", "no-cache");
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: Oauth.client_id,
      scope: scope,
      redirect_uri: Oauth.redirect_uri + `?clientUrl=${clientUrl.replace('#', '%23')}`,
      state: state
    }));
});

authRouter.get('/callback', function (req, res) {
  var code = req.query.code || null;
  var clientUrl = req.query.clientUrl || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  //should probably do something with the state here      

  let authHeader = new Buffer.from(Oauth.client_id + ':' + Oauth.client_secret).toString('base64')

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: Oauth.redirect_uri + `?clientUrl=${clientUrl.replace('#', '%23')}`,
      grant_type: 'authorization_code'
    },
    headers: { 'Authorization': 'Basic ' + authHeader },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {

      var access_token = body.access_token,
        refresh_token = body.refresh_token;

      res.redirect((clientUrl || CLIENT_URL) + '?&' +
        querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        })
      );
    } else {
      res.redirect('/#' +
        querystring.stringify({
          error: 'invalid_token',
          status: response.statusCode,
          errorMessage: error
        }));
    }
  });
});

authRouter.get('/refresh_token', function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(Oauth.client_id + ':' + Oauth.client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    //if (!error) {
      var access_token = body.access_token;

      // res.header("Access-Control-Allow-Origin", "*");
      res.send({
        'access_token': access_token
      });
    //}
  });
});

//lazy c'mon
authRouter.post('/getVideoId', function(req, res){    
  songName = req.body.songName;
  artistName = req.body.artistName;

  res.header("Access-Control-Allow-Origin", "*");
  getVideoId(songName, artistName, (videoId) => {
    res.send({videoId:videoId})
  })
});

function getVideoId(songName, artistName, callback){
  var q = songName + ' ' + artistName + ' music video';
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

          callback(result)
      }
  );
}

module.exports = { authRouter, Oauth };
