var express = require('express')
var router = express.Router()

router.get('/eventMonthsSource', function(req, res) {
  var eventMonthsSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: [0.6, 0.5, 0.4, 0.3]
  }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(eventMonthsSource))
})

module.exports = router