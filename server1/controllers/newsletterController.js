const Newsletter = require("../models/Newsletter");

exports.addEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if email already exists
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: "Email already subscribed" });
    }

    const newEmail = new Newsletter({ email });
    await newEmail.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error("Newsletter error:", err.message);
    res.status(500).json({ error: "Server error, please try again later." });
  }
};
