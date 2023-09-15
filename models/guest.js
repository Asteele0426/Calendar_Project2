const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: String 
}, {
    type: String,
    required: true,
    unique: true

//   timestamps: true 
});

module.exports = mongoose.model('Guest', guestSchema);