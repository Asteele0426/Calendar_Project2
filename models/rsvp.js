const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
  name: {
    type: String,
   
  },
  phoneNumber: {
    type: Number 
  },
  event: { 
    type: Schema.Types.ObjectId,
    ref: 'Event'

  }
}, {
  timestamps: true
});

module.exports = rsvpSchema;