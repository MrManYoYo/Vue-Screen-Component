var express = require('express')
var router = express.Router()

router.get('/areaSource', function(req, res) {
  var eventMonthsSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: [
      { "value": 60, "name": "访问" },
      { "value": 40, "name": "咨询" },
      { "value": 20, "name": "订单" },
      { "value": 80, "name": "点击" },
      { "value": 100, "name": "展现" }
    ]
  }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(eventMonthsSource))
})

module.exports = router