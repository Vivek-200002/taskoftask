const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addClient, getClients } = require("../controllers/clientController");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), addClient);
router.get("/", getClients);

module.exports = router;
