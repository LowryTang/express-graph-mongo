const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventTag = new Schema({
  name: { type: String }
})

mongoose.model('User', EventTag)
