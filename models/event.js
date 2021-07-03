const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  
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
  guests: [ 
    { 
          user: {type: Schema.Types.ObjectId,
                ref: 'User'
              },
          comment: { 
            type: String,
            maxLength: 128
         }
     }
      
  ] 
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
