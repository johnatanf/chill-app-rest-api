const express = require("express");
const {
  getSubscription,
  getSubscriptions,
  createSubscription,
  deleteSubscription,
  updateSubscription,
} = require("../controllers/subscriptions.js");

const router = express.Router();

router.get("/", getSubscriptions);

router.post("/", createSubscription);

router.get("/:id", getSubscription);

router.delete("/:id", deleteSubscription);

router.patch("/:id", updateSubscription);

module.exports = router;
