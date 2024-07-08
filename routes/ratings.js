const express = require("express");
const {
  getRating,
  getRatings,
  createRating,
  deleteRating,
  updateRating,
} = require("../controllers/ratings.js");

const router = express.Router();

router.get("/", getRatings);

router.post("/", createRating);

router.get("/:id", getRating);

router.delete("/:id", deleteRating);

router.patch("/:id", updateRating);

module.exports = router;
