const express = require("express");
const {
  getGenre,
  getGenres,
  createGenre,
  deleteGenre,
  updateGenre,
} = require("../controllers/genres.js");

const router = express.Router();

router.get("/", getGenres);

router.post("/", createGenre);

router.get("/:id", getGenre);

router.delete("/:id", deleteGenre);

router.patch("/:id", updateGenre);

module.exports = router;
