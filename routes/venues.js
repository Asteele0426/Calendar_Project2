const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venue');

router.post('/events/:id/venue', venuesCtrl.create);

module.exports = router;