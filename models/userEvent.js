const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserEvent = new Schema({
  userId: { type: String },
  eventId,
  role
})

mongoose.model('User', UserEvent)
