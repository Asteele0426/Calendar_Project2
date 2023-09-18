const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const venueSchema = new Schema({
    venue: {
      type: String,
      enum: ['1920 Tavern', 'Little Alleuy', 'Kimball Hall', 'Variant', 'Gate City']
    },
    date: {
      type: Date,
      default: () => Date.now()+365*24*60*60000
    }
  })
//above is number 1
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
  venues: [venueSchema]	
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);




