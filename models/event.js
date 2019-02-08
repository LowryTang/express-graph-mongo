const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
  name: { type: String }
})

mongoose.model('Event', EventSchema)
