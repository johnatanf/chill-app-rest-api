const express = require("express");
const {
  getContentGenre,
  getContentGenres,
  createContentGenre,
  deleteContentGenre,
  updateContentGenre,
} = require("../controllers/contentgenre.js");

const router = express.Router();

router.get("/", getContentGenres);

router.post("/", createContentGenre);

router.get("/:id", getContentGenre);

router.delete("/:id", deleteContentGenre);

router.patch("/:id", updateContentGenre);

module.exports = router;
