const mongoose = require('mongoose')
const config = require('../config')
const logger = require('../common/logger')

mongoose.connect(config.db, {
  poolSize: 20,
  useCreateIndex: true,
  useNewUrlParser: true
}, function (err) {
  if (err) {
    logger.error('connect to %s error: ', config.db, err.message)
    process.exit(1)
  }
})

mongoose.plugin(require('./baseModel'))
// models
require('./user')
require('./event')

exports.User = mongoose.model('User')
exports.Topic = mongoose.model('Event')
exports.Topic = mongoose.model('Event')
