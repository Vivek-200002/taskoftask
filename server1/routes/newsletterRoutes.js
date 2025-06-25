const express = require("express");
const router = express.Router();
const { addEmail, getEmails } = require("../controllers/newsletterController");

router.post("/", addEmail);
router.get("/", getEmails);

module.exports = router;
