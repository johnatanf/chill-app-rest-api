const express = require("express");
const {
  loginUserAccount,
} = require("../controllers/login.js");

const router = express.Router();

router.post("/", loginUserAccount);

module.exports = router;
