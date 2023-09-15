var express = require('express');
var router = express.Router();
const guestCtrl = require('../controllers/guests')
router.get('/guests/new/:id', guestCtrl.new)
router.post('/guests/:id', guestCtrl.create)
router.post('/events/:id/guests', guestCtrl.addGuest)
module.exports = router
