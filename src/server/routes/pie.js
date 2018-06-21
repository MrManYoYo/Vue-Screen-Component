var express = require('express')
var router = express.Router()

router.get('/eventTypeSource', function(req, res) {
  var eventTypeSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: {
      "便民服务": 1221,
      "城市管理": 2532,
      "社会治安": 1221,
      "社会监管": 3350
    }
  }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(eventTypeSource))
})

router.get('/caringObjectSource', function(req, res) {
  var caringObjectSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: {
      "老年人": 21,
      "优抚对象": 10,
      "计生人员": 1,
      "企业退休人员": 10,
      "结婚女性": 1,
      "需救助人员": 10,
      "未成年保护":1,
      "失业人员": 10,
      "双拥人员": 21,
      "育龄妇女": 3,
      "出身婴儿": 1,
      "低保人员": 10,
      "残疾人": 5,
      "怀孕妇女": 2
    }
  }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(caringObjectSource))
})

router.get('/eventHandlingSource', function(req, res) {
  var eventHandlingSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: {
      "受理率": "65%",
      "办理率": "80%",
      "办结率": "98%",
    }
  }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(eventHandlingSource))
})

module.exports = router