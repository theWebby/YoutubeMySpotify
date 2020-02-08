var { Router } = require('express')
var router = Router()

var { authRouter, Oauth } = require('./auth')

router.use(authRouter); //CHANGE TO AUTH
// router.use('/spotify_controls', controls);

module.exports = router

