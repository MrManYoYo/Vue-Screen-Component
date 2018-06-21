var express = require('express')
var router = express.Router()

router.get('/personRangeSource', function(req, res) {
  var eventMonthsSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: {
      "杭州市": 800,
      "宁波市": 1000,
      "温州市": 900,
      "嘉兴市": 1100,
      "绍兴市": 800,
      "诸暨市": 1200
    }
  }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(eventMonthsSource))
})

module.exports = router