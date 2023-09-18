var express = require('express');
var router = express.Router();
const eventCtrl = require('../controllers/events')
/* GET users listing. */
router.get('/', eventCtrl.index );
router.get('/new', eventCtrl.new)
router.post('/', eventCtrl.create)
router.get('/:id', eventCtrl.show);

module.exports = router;


