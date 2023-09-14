const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events.js');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
router.get('/', eventsCtrl.index);

router.get('/new', ensureLoggedIn, eventsCtrl.new);
router.get('/:id', eventsCtrl.show);
router.post('/', ensureLoggedIn, eventsCtrl.create);
	
module.exports = router;