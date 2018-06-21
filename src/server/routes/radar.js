var express = require('express')
var router = express.Router()

router.get('/ageRangeSource', function(req, res) {
  var eventTypeSource = {
    msg: 'Get data success!',
    state: true,
    code: 200,
    data: [
      { name: '0~15岁', value: 3213 },
      { name: '16～30岁', value: 3313 },
      { name: '31～45岁', value: 3213 },
      { name: '45～60岁', value: 1213 },
      { name: '60～80岁', value: 1213 },
      { name: '80岁以上', value: 1213 },]
    }
  res.header("Content-Type", "application/json;charset=utf-8")
  res.end(JSON.stringify(eventTypeSource))
})

module.exports = router