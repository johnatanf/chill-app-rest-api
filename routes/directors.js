const express = require("express");
const {
  getDirector,
  getDirectors,
  createDirector,
  deleteDirector,
  updateDirector,
} = require("../controllers/directors.js");

const router = express.Router();

router.get("/", getDirectors);

router.post("/", createDirector);

router.get("/:id", getDirector);

router.delete("/:id", deleteDirector);

router.patch("/:id", updateDirector);

module.exports = router;
