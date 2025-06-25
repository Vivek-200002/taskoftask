const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: String,
  description: String,
  designation: String,
  imageUrl: String,
});

module.exports = mongoose.model("Client", clientSchema);
