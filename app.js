var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config')
var setupController = require('./controllers/setupController')
var appController = require('./controllers/appController')

var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

mongoose.connect(config.getDBConnectionString())
setupController(app)
appController(app)

app.listen(port)
console.log("server is on port" + port);
