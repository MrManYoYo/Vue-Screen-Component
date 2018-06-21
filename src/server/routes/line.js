var express = require('express')
var router = express.Router()

router.get('/eventMonthsSource', function(req, res) {
  var eventMonthsSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: {
      '2016/12': 8000,
      '2017/1': 10000,
      '2017/2': 9000,
      '2017/3': 11000,
      '2017/4': 8000,
      '2017/5': 12000,
    }
  }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(eventMonthsSource))
})

module.exports = router