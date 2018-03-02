const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: String,
  lng: String,
  lat: String,
  date: String,
  description: Boolean
})

module.exports = mongoose.model('Event', eventSchema)
