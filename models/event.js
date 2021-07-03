const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },

  start_date: { type: Date },
  end_date: { type: Date },

  venue: {
    type: String
  },
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
