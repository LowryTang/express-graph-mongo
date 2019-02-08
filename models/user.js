const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  fistName: { type: String },
  lastName: { type: String }

})

mongoose.model('User', UserSchema)
