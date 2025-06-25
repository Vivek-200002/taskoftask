const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};
