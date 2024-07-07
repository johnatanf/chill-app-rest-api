const express = require("express");
const {
  getParentalRating,
  getParentalRatings,
  createParentalRating,
  deleteParentalRating,
  updateParentalRating,
} = require("../controllers/parentalratings.js");

const router = express.Router();

router.get("/", getParentalRatings);

router.post("/", createParentalRating);

router.get("/:id", getParentalRating);

router.delete("/:id", deleteParentalRating);

router.patch("/:id", updateParentalRating);

module.exports = router;
