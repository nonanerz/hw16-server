const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: String,
  location: String,
  date: String,
  description: Boolean
})

module.exports = mongoose.model('Event', eventSchema)
