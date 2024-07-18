const express = require("express");
const {
  getContent,
  getContents,
  createContent,
  deleteContent,
  updateContent,
} = require("../controllers/contents.js");
const verifyToken = require('../middlewares/verifyToken.js')

const router = express.Router();

router.get("/", verifyToken, getContents);

router.post("/", createContent);

router.get("/:id", verifyToken, getContent);

router.delete("/:id", deleteContent);

router.patch("/:id", updateContent);

module.exports = router;
