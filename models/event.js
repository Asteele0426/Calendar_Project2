const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    name: String,
    date: Date,
    location: String,
    guestList: [String]
},
{
    timestamps: true
});





module.exports = mongoose.model('Event', eventSchema);

