var { Router } = require('express')
var router = Router()

var { authRouter, Oauth } = require('./auth')
var controls = require('./controls')(Oauth)

router.use(authRouter);
router.use('/spotify_controls', controls);

module.exports = router

