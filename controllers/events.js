const Event = require('../models/event')
const Guest = require('../models/guest')
module.exports = {
index,
new: newEvent,
create,
show,
addGuest
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
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/events');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('events/new', { errorMsg: err.message });
    }
  }

  async function show(req, res) {
    const event = await Event.findById(req.params.id) 
  console.log(event)
    const guests = await Guest.find({ _id: { $nin: event._id } })
    console.log(guests)
     res.render('events/show', { title: 'Event Detail', event, guests});
  }
     async function addGuest(req, res) {
        const event = await Event.findById(req.params.eventtId)
        event.guests.push(req.body.guestId)
        try {
            await event.save()
            res.redirect(`/events/${event._id}`)
        } catch(err) {
    console.log(err)
        }
      }
    
 




  







// async function show(req, res) {
// //     const flight = await Flight.findById(req.params.id, );
// //     res.render('flights/show', { title: 'Flight Details', flight });
// //   }
//this was my old show function when the app was working