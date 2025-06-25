const Project = require("../models/Project");
const cloudinary = require("../config/cloudinary");

exports.addProject = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      imageUrl: result.secure_url,
    });

    const savedProject = await project.save();

    // Respond with the newly created project
    res.status(201).json(savedProject);
  } catch (err) {
    console.error("Error adding project:", err.message);
    res.status(500).json({ error: "Failed to add project" });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err.message);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};
