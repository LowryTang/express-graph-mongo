const { merge } = require('lodash')
const user = require('./user')

const resolverMap = merge({}, user)

module.exports = resolverMap
