var express = require('express')
var router = express.Router()

router.get('/eventListSource', function(req, res) {
  var eventMonthsSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: [
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" },
      { "type": "测试类型", "name": "新增·测试事件", "address": "西湖区", "source": "PC录入", "time": "2018-04-20" }
    ]
  }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(eventMonthsSource))
})

module.exports = router