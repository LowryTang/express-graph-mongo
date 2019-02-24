const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  fistName: { type: String },
  lastName: { type: String }
  // support social login
})

mongoose.model('User', UserSchema)
