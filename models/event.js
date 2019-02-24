const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
  name: { type: String }
  description,
  location,
  locationType,
  timeStart,
  timeEnd,
  imageURL,
  organizerName,
  socialLinks: [],
  privacy, //public / private with invitation,
  sessionIds,
  eventTags
})

mongoose.model('Event', EventSchema)
