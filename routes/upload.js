const express = require("express");
const path = require("path");
const { uploadFile, confirmUploadFile } = require("../controllers/upload.js");
const publicPath = path.join(__dirname, "../public");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.sendFile("upload.html", {
      root: path.join(publicPath, "pages"),
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", uploadFile, confirmUploadFile);

module.exports = router;
