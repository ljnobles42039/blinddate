const { Schema, model } = require("mongoose");

const calendarSchema = new Schema(
  {
    month: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Calendar", calendarSchema);