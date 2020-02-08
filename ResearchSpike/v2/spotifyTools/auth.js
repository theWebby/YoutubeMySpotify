var { Router } = require('express')
var querystring = require('querystring');
var config = require('config-yml');
var request = require('request'); // "Request" library

var authRouter = Router()
var Oauth = {
    client_id: process.env.spotifyClientId || config.spotify.clientId,
    client_secret: process.env.spotifyClientSecret || config.spotify.clientSecret,
    uri: 'http://' + config.url + ':80/',
    redirect_uri: 'http://' + config.url + ':80/callback'
}

var stateKey = 'spotify_auth_state';
var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

authRouter.get('/login', function(req, res) {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);
  
    // your application requests authorization
    var scope = 'user-read-private user-read-email user-read-currently-playing user-read-playback-state user-modify-playback-state';
    console.log('\n\n\n\n\n\nhere\n\n\n\n\n', 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: Oauth.client_id,
      scope: scope,
      redirect_uri: Oauth.redirect_uri,
      state: state
    }))
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: Oauth.client_id,
        scope: scope,
        redirect_uri: Oauth.redirect_uri,
        state: state
      }));
  });

authRouter.get('/callback', function(req, res) {
    console.log("WOAH DUDE")

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
      
      
      let authHeader = new Buffer(Oauth.client_id + ':' + Oauth.client_secret).toString('base64')
      console.log('\n\nThis is what you need to get:', authHeader)

    //   authHeader = (Oauth.client_id + ':' + Oauth.client_secret)
    //   console.log('\n\nFrom this:', authHeader)

      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: Oauth.redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
        //   'Authorization': 'Basic ' + (new Buffer(Oauth.client_id + ':' + Oauth.client_secret).toString('base64'))
          'Authorization': 'Basic ' + authHeader
        },
        json: true
      };
  
      request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
  
          var access_token = body.access_token,
              refresh_token = body.refresh_token;
  
          res.redirect('/watchSpotify/#' +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token
            }));
            Oauth.access_token = access_token
            Oauth.refresh_token = refresh_token
        } else {
          res.redirect('/#' +
            querystring.stringify({
              error: 'invalid_token'
            }));
        }
      });
    }
});

authRouter.get('/refresh_token', function(req, res) {
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

    request.post(authOptions, function(error, response, body) {
        if (!error) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
});

module.exports = { authRouter, Oauth };