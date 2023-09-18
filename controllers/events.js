const Event = require('../models/event')
const Rsvp = require('../models/rsvp')
module.exports = {
index,
new: newEvent,
create,
show,
addRsvp,
deleteEvent,
update,
// updateEventForm
};

async function index(req, res) {
    const events = await Event.find({})
res.render('events/index', {events})
}

function newEvent(req, res) {
    res.render('events/new', {errorMsg:''})
}

async function create(req, res) {
   
    try {
      await Event.create(req.body);
      res.redirect('/events');  
    } catch (err) {
      console.log(err);
      res.render('events/new', { errorMsg: err.message });
    }
  }

  async function show(req, res) {
    const event = await Event.findById(req.params.id) 
  console.log(event)
    const rsvps = await Rsvp.find({ _id: { $nin: event._id } })
    // console.log(rsvps)
     res.render('events/show', { title: 'Event Detail', event, rsvps});
  }
     async function addRsvp(req, res) {
        const event = await Event.findById(req.params.eventId)
        event.rsvps.push(req.body.rsvpId)
        try {
            await event.save()
            res.redirect(`/events/${event._id}`)
        } catch(err) {
    console.log(err)
        }
      }


function deleteEvent(req, res, next) {
	Event.findByIdAndDelete(req.params.id)
		// .then((event) => {
		// 	if (!event.user.equals(req.user._id)) throw new Error('Unauthorized')
		// 	return event.deleteOne()
		// })
		.then(() => res.redirect('/events'))
		.catch(next)
}

// function updateEventForm(req, res, next) {
// 	Event.findById(req.params.id)
// 		.then((event) => {
// 			res.render('event/edit', {
// 				event,
// 				title: 'Details',
// 			})
// 		})
// 		.catch(next)
// }

function update(req, res, next) {
	Event.findById(req.params.id)
		.then((event) => {
			if (!event.user.equals(req.user._id)) throw new Error('Unauthorized')
			return event.updateOne(req.body)
		})
		.then(() => res.redirect(`/events/${req.params.id}`))
		.catch(next)
  }
    
 




  







// async function show(req, res) {
// //     const event = await Event.findById(req.params.id, );
// //     res.render('events/show', { title: 'Event Details', event });
// //   }
//this was my old show function when the app was working