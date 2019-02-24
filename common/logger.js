const config = require('../config')
const path = require('path')
const log4js = require('log4js')
const env = process.env.NODE_ENV || 'development'

log4js.configure({
  appenders: {
    out: { type: 'console' },
    file: { type: 'file', filename: path.join(config.logDir, 'events-api.log') },
    access: { type: 'file', filename: path.join(config.logDir, 'events-access.log') }
  },
  categories: {
    default: { appenders: ['out', 'file'], level: 'error' },
    access: { appenders: ['out', 'access'], level: 'info' }
  }
})

const logger = log4js.getLogger(config.appName)

// set the default logger level.
logger.level = config.debug && env !== 'TEST' ? 'DEBUG' : 'ERROR'

// Create logger for different category.
logger.getLogger = log4js.getLogger
module.exports = logger
