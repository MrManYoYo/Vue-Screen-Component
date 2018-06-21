var express = require('express')
var router = express.Router()

router.use('/bar', require('./bar'))
router.use('/pie', require('./pie'))
router.use('/line', require('./line'))
router.use('/radar', require('./radar'))
router.use('/table', require('./table'))
router.use('/ball', require('./ball'))
router.use('/funnel', require('./funnel'))

module.exports = router