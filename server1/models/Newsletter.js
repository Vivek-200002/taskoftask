const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,           // prevents duplicate subscriptions
    lowercase: true,        // stores email in lowercase
    trim: true,             // removes whitespace
    match: [                // optional: validate email format
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address',
    ],
  },
});

module.exports = mongoose.model("Newsletter", newsletterSchema);
