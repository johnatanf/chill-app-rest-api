const express = require("express");
const path = require("path");
const publicPath = path.join(__dirname, "../public");
const {
  loginUserAccount,
} = require("../controllers/login.js");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.sendFile("login.html", {
      root: path.join(publicPath, "pages"),
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", loginUserAccount);

module.exports = router;
