const express = require("express");
const {
  getEpisode,
  getEpisodes,
  createEpisode,
  deleteEpisode,
  updateEpisode,
} = require("../controllers/episodes.js");

const router = express.Router();

router.get("/", getEpisodes);

router.post("/", createEpisode);

router.get("/:id", getEpisode);

router.delete("/:id", deleteEpisode);

router.patch("/:id", updateEpisode);

module.exports = router;
