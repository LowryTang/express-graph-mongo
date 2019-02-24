const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Voting = new Schema({
  question: { type: String },
  answers, // [{index, value}]
  allowOther,
  active: { type: Boolean }
  sessionId
})

mongoose.model('Voting', Voting)
