const express = require("express");
const {
  getPayment,
  getPayments,
  createPayment,
  deletePayment,
  updatePayment,
} = require("../controllers/payments.js");

const router = express.Router();

router.get("/", getPayments);

router.post("/", createPayment);

router.get("/:id", getPayment);

router.delete("/:id", deletePayment);

router.patch("/:id", updatePayment);

module.exports = router;
