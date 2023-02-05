const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  tags: [],
});

module.exports = mongoose.model("questions", questionSchema);