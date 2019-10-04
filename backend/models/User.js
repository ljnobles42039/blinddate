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
    role: {
      type: String,
      enum: ['user', 'host']
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
    phoneNumber: {
      type: String
    },
    website: {
      type: String
    },            
    city: {
      type: String,
      enum: ['CDMX']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'username' });

module.exports = model('User', userSchema);
