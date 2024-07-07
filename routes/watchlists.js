const express = require("express");
const {
  getWatchList,
  getWatchLists,
  createWatchList,
  deleteWatchList,
  updateWatchList,
} = require("../controllers/watchlists.js");

const router = express.Router();

router.get("/", getWatchLists);

router.post("/", createWatchList);

router.get("/:id", getWatchList);

router.delete("/:id", deleteWatchList);

router.patch("/:id", updateWatchList);

module.exports = router;
