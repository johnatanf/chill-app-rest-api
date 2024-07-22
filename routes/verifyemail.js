const express = require("express");
const {
  verifyEmail,
} = require("../controllers/verifyemail.js");

const router = express.Router();

router.get("/", verifyEmail);

module.exports = router;
