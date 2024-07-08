const express = require("express");
const {
  getContentDirector,
  getContentDirectors,
  createContentDirector,
  deleteContentDirector,
  updateContentDirector,
} = require("../controllers/contentdirector.js");

const router = express.Router();

router.get("/", getContentDirectors);

router.post("/", createContentDirector);

router.get("/:id", getContentDirector);

router.delete("/:id", deleteContentDirector);

router.patch("/:id", updateContentDirector);

module.exports = router;
