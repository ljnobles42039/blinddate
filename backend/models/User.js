const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      enum: ["USER", "PROVIDER"],
      default: "USER"
    },
    budget: {
      type: String,
      enum: ['$', '$$', '$$$']
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
