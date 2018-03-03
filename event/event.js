const express = require('express')

const Event = require('./model')

const router = express.Router()

router.get('/events', (req, res, next) => {
  Event.find({'date': {'$gte': new Date()}})
        .then(events => {
          res.json({events})
        })
        .catch(next)
})

router.post('/events', (req, res, next) => {
  let data = req.body.event
  data.date = new Date(data.date)
  new Event(data)
        .save()
        .then(event => {
          res.json({event})
        })
        .catch(next)
})

module.exports = router
