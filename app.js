const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

require('./models')
const users = require('./routes/users')

const app = express()

app.use(require('response-time')())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1/graphql', cors(), users)

module.exports = app
