const express = require('express')

const expressApp = express()

expressApp.use(express.static(__dirname + '/public'));

expressApp.listen(3000)