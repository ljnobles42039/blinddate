
const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Event"
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = model("Comment", commentSchema);