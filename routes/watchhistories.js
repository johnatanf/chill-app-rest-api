const express = require("express");
const {
  getWatchHistory,
  getWatchHistories,
  createWatchHistory,
  deleteWatchHistory,
  updateWatchHistory,
} = require("../controllers/watchhistories.js");

const router = express.Router();

router.get("/", getWatchHistories);

router.post("/", createWatchHistory);

router.get("/:id", getWatchHistory);

router.delete("/:id", deleteWatchHistory);

router.patch("/:id", updateWatchHistory);

module.exports = router;
