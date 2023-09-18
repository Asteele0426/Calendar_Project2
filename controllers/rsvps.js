const Rsvp = require('../models/rsvp')
const Event = require('../models/event')

module.exports = {
    new: newRsvp,
    create,
    addRsvp
}

async function newRsvp(req, res) {
    res.render('rsvp/new', {title: 'Add Rsvp'})
}

async function create(req, res) {
    try {
        req.body.event = req.params.id
        await Rsvp.create(req.body);
        res.redirect('/events');  
      } catch (err) {
        console.log(err);
        res.render('events/new', { errorMsg: err.message });
      }
}

async function addRsvp(req, res) {
    const event = await Event.find(req.params.id)
    event.rsvp.push(req.body.rsvpId)
    await event.save()
    res.redirect(`/events/${event._id}`)
}