const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  // unique_id: {
  //     type: String,
  //     required: true
  //     },
  
  title: {
    type: String,
    required: true,
  },

  start_date: { type: Date },
  end_date: { type: Date },

  venue: [
    {
      name: { type: String },
      address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: Number },
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  // guests: [ { guests: [ username || / && email ] } ] or { type: [ guestSchema ], default: undefined }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
