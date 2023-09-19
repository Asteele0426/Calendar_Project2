const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rsvpSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number
  },
}, {

  timestamps: true
});
const venueSchema = new Schema({
    venue: {
      type: String,
      enum: ['1920 Tavern', 'Little Alley', 'Kimball Hall', 'Variant', 'Gate City']
    },
    date: {
      type: Date,
      default: () => Date.now()+365*24*60*60000
    }
  })
const eventSchema = new mongoose.Schema({
  event: { type: String, enum: ['Wedding', 'Birthday', 'Bat Mitzvah', 'Baby Shower'] },
  eventNo: {
    type: Number,
    min: 10, 
    max: 9999
  },
  venue: {
    type: String,
    enum: ['1920 Tavern', 'Little Alley', 'Kimball Hall', 'Variant', 'Gate City'], default: 'Variant'
  },
  date: {
    type: Date, 
    default: () => Date.now()+365*24*60*60000
  },
  rsvp: [rsvpSchema]	
},{
  timestamps: true
  
});

module.exports = mongoose.model('Event', eventSchema);




