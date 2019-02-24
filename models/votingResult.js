const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VotingResult = new Schema({
  votingId: { type: String },
  answerId,
  value,
  userId,
  userName
})

mongoose.model('User', VotingResult)
