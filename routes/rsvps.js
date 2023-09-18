var express = require('express');
const router = express.Router();
const rsvpCtrl = require('../controllers/rsvps')
router.get('/rsvps/new/:id', rsvpCtrl.new)
router.post('/:id', rsvpCtrl.addRsvp)
router.post('/events/:id/rsvps', rsvpCtrl.create)
module.exports = router

