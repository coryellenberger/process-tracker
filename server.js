// server.js

// modules =================================================
var express = require('express')
var app = express()
var path = require('path')

// configuration ===========================================

// set our port
var port = process.env.PORT || 3000

// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, '/public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port)

// shoutout to the user
console.log('listening on port ' + port)

// expose app
exports = module.exports = app
