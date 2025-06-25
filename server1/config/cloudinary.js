// controllers/projectController.js
const Project = require("../models/Project");
const cloudinary = require("../config/cloudinary");

exports.addProject = async (req, res) => {
  try {
    const file = req.file.path;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file, {
      folder: 'projects',
    });

    // Create and save project with image URL
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      imageUrl: result.secure_url,
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error("Error uploading project:", error);
    res.status(500).json({ error: 'Project upload failed' });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};
