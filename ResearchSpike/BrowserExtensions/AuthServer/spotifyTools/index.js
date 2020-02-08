var { Router } = require('express')
var router = Router()

var { authRouter, Oauth } = require('./auth')
var controls = require('./controls')(Oauth)

router.use(authRouter); //CHANGE TO AUTH
router.use('/spotify_controls', controls);

module.exports = router

