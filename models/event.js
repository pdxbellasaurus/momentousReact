const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    unique_id: {
        type: String,
        required: true
        },
  title: { 
      type: String, 
      required: true 
    },

    start_date: {
        type: Date,
        },
     
      end_date: {
        type: Date,
        allowNull: true,
      },

  description:{
      type: String,
      required: true
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
