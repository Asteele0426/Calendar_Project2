const Rsvp = require('../models/event')
const Event = require('../models/event')

module.exports = {
    new: newRsvp,
    create,
    addRsvp,
    deleteRsvp
}

async function newRsvp(req, res) {
    res.render('rsvp/new', {title: 'Add Rsvp'})
}

async function create(req, res) {
    console.log('banana')
    console.log(req.body)
//     try { 
//         const event = await Event.findById(req.params.id) 
//         console.log(event)  
// event.rsvp.push(req.body)
// console.log(event)
//         await event.save()
//         res.redirect('/events');  
//       } catch (err) {
//         console.log(err);
//         res.render('events/new', { errorMsg: err.message });
//       }
}

async function addRsvp(req, res) {
    console.log('apple')
    console.log(req.body)
    const event = await Event.findById(req.params.id)
    event.rsvp.push(req.body)
    await event.save()
    res.redirect(`/events/${event._id}`)
}

function deleteRsvp(req, res, next) {
    Rsvp.findById(req.params.rsvpID)
    .then((event) => {
        if (!event.user.equals(req.user._id)) throw new Error('Unauthorized')
        event.rsvp.id(req.params.rsvpId).deleteOne()
        return event.save()
    })
    .then(() => res.redirect(`/events/${req.params.battleId}`))
    .catch(next)
}