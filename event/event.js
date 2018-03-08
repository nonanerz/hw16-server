const express = require('express')

const Event = require('./model')

const router = express.Router()

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.get('/events', (req, res, next) => {
  Event.find()
        .then(events => {
          res.json({events})
        })
        .catch(next)
})

router.post('/events', (req, res, next) => {
  new Event(req.body)
        .save()
        .then(event => {
          res.json({event})
        })
        .catch(next)
})

module.exports = router
