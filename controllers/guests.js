const Guest = require('../models/guest');
const Event = require('../models/event');

module.exports = {
  new: newGuest,
  create,
  addToGuestlist
};

async function addToGuestlist(req, res) {
  const event = await Event.findById(req.params.id);
  event.guest.push(req.body.performerId);
  await event.save();
  res.redirect(`/events/${event._id}`);
}

async function newGuest(req, res) {
  const guests = await Guest.find({}).sort('name');
  res.render('guests/new', { title: 'Add Guest', guest });
}

async function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // Fix by either reformatting to "MM-DD-YYYY" or by 
  // appending a "time" fragment like this... 
  req.body.born += 'T00:00';
  try {
    await Performer.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/performers/new');
}