const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const hostSchema = new Schema(
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
    city: String,
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

hostSchema.plugin(PLM, { usernameField: 'username' });

module.exports = model('Host', hostSchema);