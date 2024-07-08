const express = require("express");
const {
  getUserAccountSubscription,
  getUserAccountSubscriptions,
  createUserAccountSubscription,
  deleteUserAccountSubscription,
  updateUserAccountSubscription,
} = require("../controllers/useraccountsubscription.js");

const router = express.Router();

router.get("/", getUserAccountSubscriptions);

router.post("/", createUserAccountSubscription);

router.get("/:id", getUserAccountSubscription);

router.delete("/:id", deleteUserAccountSubscription);

router.patch("/:id", updateUserAccountSubscription);

module.exports = router;
