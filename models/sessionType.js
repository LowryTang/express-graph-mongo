const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SessionType = new Schema({
  name: { type: String },
  color: { type: String }
})

mongoose.model('SessionType', SessionType)
