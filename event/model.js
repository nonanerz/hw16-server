const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const eventSchema = new mongoose.Schema({
  title: String,
  lng: String,
  lat: String,
  date: Date,
  description: String
})

module.exports = mongoose.model('Event', eventSchema)
