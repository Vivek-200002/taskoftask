
const Client = require("../models/Client");
const cloudinary = require("../config/cloudinary");

exports.addClient = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const client = new Client({
      name: req.body.name,
      description: req.body.description,
      designation: req.body.designation,
      imageUrl: result.secure_url,
    });
    await client.save();
    res.status(201).json({ message: "Client added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};
