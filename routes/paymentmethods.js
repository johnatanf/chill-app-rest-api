const express = require("express");
const {
  getPaymentMethod,
  getPaymentMethods,
  createPaymentMethod,
  deletePaymentMethod,
  updatePaymentMethod,
} = require("../controllers/paymentmethods.js");

const router = express.Router();

router.get("/", getPaymentMethods);

router.post("/", createPaymentMethod);

router.get("/:id", getPaymentMethod);

router.delete("/:id", deletePaymentMethod);

router.patch("/:id", updatePaymentMethod);

module.exports = router;
