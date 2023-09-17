const Guest = require('../models/guest');
const Event = require('../models/event');

module.exports = {
  new: newGuest,
  create,
  addGuest
};

async function addGuest(req, res) {
  // const event = await Event.findById(req.params.id);
  const event = await Event.find(req.params.id);
  event.guest.push(req.body.guestId);
  await event.save();
  res.redirect(`/events/${event._id}`);
}

async function newGuest(req, res) {
  res.render('guest/new', {title: 'Add Guest'})
}

// async function newGuest(req, res) {
//   const guests = await Guest.find({}).sort('name');
//   res.render('guests/new', { title: 'Add Guest', guest });
// }

async function create(req, res) {
  try {
      req.body.event = req.params.id
      await Guest.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/events');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('events/new', { errorMsg: err.message });
    }
}

// async function create(req, res) {
//   // Need to "fix" date formatting to prevent day off by 1
//   // This is due to the <input type="date"> returning the date
//   // string in this format:  "YYYY-MM-DD"
//   // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
//   // Fix by either reformatting to "MM-DD-YYYY" or by 
//   // appending a "time" fragment like this... 
//   req.body.born += 'T00:00';
//   try {
//     await Guest.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.redirect('/guests/new');
// }