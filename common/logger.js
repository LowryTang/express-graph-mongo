const config = require('../config')
const path = require('path')
const log4js = require('log4js')
const env = process.env.NODE_ENV || 'development'

log4js.configure({
  appenders: {
    out: { type: 'console' },
    log: { type: 'file', filename: path.join(config.logDir, 'events-api.log') }
  },
  categories: {
    default: { appenders: ['out', 'log'], level: 'error' }
  }
})

const logger = log4js.getLogger(config.name)
logger.level = config.debug && env !== 'TEST' ? 'DEBUG' : 'ERROR'

module.exports = logger
