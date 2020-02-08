module.exports = function(Oauth){
    var { Router } = require('express')
    var router = Router()
    var request = require('request')
    var ajax = require('axios');
    var util = require('../../util.js')

    function controlSpotify(method, control, authorization, callback){    
        var options = {
            method: method,
            url: 'https://api.spotify.com/v1/me/player/' + control,
            headers: {
                'Authorization': authorization
            }
        }

        request(options).on('response', function(response) {
            callback(response);
        })
    }

    router.get('/pause', function(req, res) {
        console.log("PAUSE")
        controlSpotify('PUT', 'pause', req.headers.authorization, (response) => {res.sendStatus(response.statusCode)})
    });

    router.get('/play', function(req, res) {
        console.log("PLAY")
        controlSpotify('PUT', 'play', req.headers.authorization, (response) => {res.sendStatus(response.statusCode)})
    });

    router.get('/next', function(req, res) {
        console.log("NEXT")
        controlSpotify('POST', 'next', req.headers.authorization, (response) => {res.sendStatus(response.statusCode)})
    });

    return router;
}