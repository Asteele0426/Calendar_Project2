var express = require('express');
var router = express.Router();
const rsvpCtrl = require('../controllers/rsvps')
router.get('/rsvps/new/:id', rsvpCtrl.new)
router.post('/rsvps/:id', rsvpCtrl.create)
router.post('/events/:id/rsvps', rsvpCtrl.addRsvp)
module.exports = router

