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

module.exports = mongoose.model('Rsvp', rsvpSchema);