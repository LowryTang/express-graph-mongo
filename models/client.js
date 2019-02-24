const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  fistName: { type: String },
  lastName: { type: String }
})

UserSchema.index({username: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});

mongoose.model('Client', UserSchema)
