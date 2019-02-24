const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const responseTime = require('response-time')
const log4js = require('log4js')
const logger = require('./common/logger')
const createServer = require('./graphql/createServer')

// init mongo db.
require('./models')
// init express server
const app = express()

app.use(responseTime())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(log4js.connectLogger(logger.getLogger('access'), { level: 'info' }))

// setup graphql server
createServer(app)

module.exports = app
