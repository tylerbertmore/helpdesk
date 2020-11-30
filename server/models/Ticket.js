const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const ticketSchema = new mongoose.Schema({
  description: String,
  role: String,
  status: String,
  dateCompleted: {
    type: Date,
    default: null
  },
  tech: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: String,
}, {timestamps: true})

ticketSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Ticket', ticketSchema);