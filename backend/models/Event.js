const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
      unique: true
    },
    cost: {
      type: String,
      enum: ['$', '$$', '$$$']
    }, 
    location: {
      type: String,
      required: false
    },       
    typeOfEvent: {
      type: String,
      enum: ['Dining', 'Sport', 'Adventure', 'Outdoor', 'Theatre', 'Art']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Event', eventSchema);