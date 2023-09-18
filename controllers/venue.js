const Event = require('../models/event');

module.exports = {
  create
};

async function create(req, res) {
  const event = await Event.findById(req.params.id);
  event.venues.push(req.body);
  try {
    await event.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/events/${event ._id}`);
}