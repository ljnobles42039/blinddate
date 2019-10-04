const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    budget: {
      type: String,
      enum: ['$', '$$', '$$$']
    },
    firstName: {
      type: String,
      required: false
    }, 
    lastName: {
      type: String,
      required: false
    },             
    city: {
      type: String,
      enum: ['CDMX']
    }, 
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'username' });

module.exports = model('User', userSchema);
