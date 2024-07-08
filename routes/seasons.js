const express = require("express");
const {
  getSeason,
  getSeasons,
  createSeason,
  deleteSeason,
  updateSeason,
} = require("../controllers/seasons.js");

const router = express.Router();

router.get("/", getSeasons);

router.post("/", createSeason);

router.get("/:id", getSeason);

router.delete("/:id", deleteSeason);

router.patch("/:id", updateSeason);

module.exports = router;
