var { Router } = require('express')
var querystring = require('querystring');
var request = require('request'); // "Request" library

const uri = 'http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/';

var authRouter = Router()
var Oauth = {
  client_id: process.env.SPOTIFY_CID,
  client_secret: process.env.SPOTIFY_SECRET,
  uri,
  redirect_uri: uri + 'callback'
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
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // client application requests authorization
  var scope = 'user-read-private user-read-email user-read-currently-playing user-read-playback-state user-modify-playback-state';
  res.header("Access-Control-Allow-Origin", "*");
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: Oauth.client_id,
      scope: scope,
      redirect_uri: Oauth.redirect_uri,
      state: state
    }));
});

authRouter.get('/callback', function (req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  //should probably do something with the state here      

  let authHeader = new Buffer.from(Oauth.client_id + ':' + Oauth.client_secret).toString('base64')

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: 'http://localhost:80/callback', //fill this in________?
      grant_type: 'authorization_code'
    },
    headers: {
      //   'Authorization': 'Basic ' + (new Buffer(Oauth.client_id + ':' + Oauth.client_secret).toString('base64'))
      'Authorization': 'Basic ' + authHeader
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {

      var access_token = body.access_token,
        refresh_token = body.refresh_token;
      console.log("yay")
      console.log(access_token)
      
      //back to the client
      // res.json(JSON.stringify({ access_token, refresh_token }))
      res.redirect('http://localhost:3000/?' +
        querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        }));
      //     Oauth.access_token = access_token
      //     Oauth.refresh_token = refresh_token
    } else {
      res.redirect('/#' +
        querystring.stringify({
          error: 'invalid_token'
        }));
    }
  });
  // }
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
    if (!error) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

module.exports = { authRouter, Oauth };