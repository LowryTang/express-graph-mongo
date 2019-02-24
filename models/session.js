const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SessionSchema = new Schema({
  name: { type: String },
  eventId,
  description,
  location,
  timeStart,
  timeEnd,
  sessionTypeId,
  sessionFilter,
  capacity,
  speakers,
})

name.model('User', SessionSchema)
