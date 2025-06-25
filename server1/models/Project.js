const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model("Project", projectSchema);
