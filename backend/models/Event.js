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
    geolocation: {
      geoType: { type: String },
      coordinates: [Number],
      required: false
    },       
    typeOfEvent: {
      type: String,
      enum: ['Dining', 'Sport', 'Adventure', 'Outdoor', 'Theatre', 'Art']
    },
    eventDate: String,
    timeOfDay: {
      type: String,
      enum: ['AllDay', '8:00A-11:59A', '12:00P-8:00P', '8:00P-until']
    },
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Event', eventSchema);