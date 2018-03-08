const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lng: { type: Number, required: true },
  lat: { type: Number, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('Event', eventSchema)
