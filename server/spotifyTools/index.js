var { Router } = require('express')
var router = Router()

var { authRouter, Oauth } = require('./auth')

router.use(authRouter); 

module.exports = router

