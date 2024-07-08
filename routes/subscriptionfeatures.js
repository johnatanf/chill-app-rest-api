const express = require("express");
const {
  getSubscriptionFeature,
  getSubscriptionFeatures,
  createSubscriptionFeature,
  deleteSubscriptionFeature,
  updateSubscriptionFeature,
} = require("../controllers/subscriptionfeatures.js");

const router = express.Router();

router.get("/", getSubscriptionFeatures);

router.post("/", createSubscriptionFeature);

router.get("/:id", getSubscriptionFeature);

router.delete("/:id", deleteSubscriptionFeature);

router.patch("/:id", updateSubscriptionFeature);

module.exports = router;
