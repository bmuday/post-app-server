const { Schema, model } = require("mongoose");

// Schema
const postSchema = new Schema(
  {
    title: String,
    body: String,
  },
  {
    timestamp: true,
  }
);

// Model
module.exports = model("Post", postSchema);
