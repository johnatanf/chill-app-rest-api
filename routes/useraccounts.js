const express = require("express");
const {
  getUserAccount,
  getUserAccounts,
  createUserAccount,
  deleteUserAccount,
  updateUserAccount,
} = require("../controllers/useraccounts.js");

const router = express.Router();

router.get("/", getUserAccounts);

router.post("/", createUserAccount);

router.get("/:id", getUserAccount);

router.delete("/:id", deleteUserAccount);

router.patch("/:id", updateUserAccount);

module.exports = router;
