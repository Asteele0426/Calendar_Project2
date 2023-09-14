const Events = require('../models/event');
// const Guest = require('../models/guest');

module.exports = {
  index,
  show,
  new: newEvent,
  create
};

async function index(req, res) {
  const event = await Event.find({});
  res.render('events/index', { title: 'All Events', event });
}

async function show(req, res) {
  const event = await Event.findById(req.params.id).populate('guestList');
//   const Guests = await guest.find({ _id: { $nin: event.guestList} }).sort('name');
  res.render('events/show', { title: 'Event Detail', event, guest });
}

function newEvent(req, res) {
  res.render('events/new', { title: 'Add Event', errorMsg: '' });
}

async function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const event = await Event.create(req.body);
    res.redirect('events/${event._id}');
  } catch (err) {
    console.log(err);
    res.render('events/new', { errorMsg: err.message });
  }
}