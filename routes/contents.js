const express = require("express");
const {
  getContent,
  getContents,
  createContent,
  deleteContent,
  updateContent,
} = require("../controllers/contents.js");

const router = express.Router();

router.get("/", getContents);

router.post("/", createContent);

router.get("/:id", getContent);

router.delete("/:id", deleteContent);

router.patch("/:id", updateContent);

module.exports = router;
