const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventPeople = new Schema({
  role: { type: String },
  name: { type: String },
  email: { type: String },
  title: { type: String },
  description: { type: String },
  avatar: { type: String },
})

mongoose.model('EventPeople', EventPeople)
