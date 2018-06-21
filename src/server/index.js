var express = require('express')
var routes = require('./routes')
var bodyParse = require('body-parser')
var app = express()

app.use(bodyParse.json())
app.use(routes)

app.listen(3000, function() {
  console.log('Server is running at port 3000!')
})
module.exports = app