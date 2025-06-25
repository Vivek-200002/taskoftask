const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { addProject, getProjects } = require("../controllers/projectController");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // temporary folder before uploading to Cloudinary
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// File filter (optional): only allow image files
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".gif" || ext === ".webp") {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

// Routes
router.post("/", upload.single("image"), addProject);
router.get("/", getProjects);

module.exports = router;
