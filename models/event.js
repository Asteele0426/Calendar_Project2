const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema (
    { eventName: {
    type: String,
    ref: 'User',
    required: true
  },
  
}, { user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String,
  eventDate: String
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);

