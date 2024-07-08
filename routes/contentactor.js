const express = require("express");
const {
  getContentActor,
  getContentActors,
  createContentActor,
  deleteContentActor,
  updateContentActor,
} = require("../controllers/contentactor.js");

const router = express.Router();

router.get("/", getContentActors);

router.post("/", createContentActor);

router.get("/:id", getContentActor);

router.delete("/:id", deleteContentActor);

router.patch("/:id", updateContentActor);

module.exports = router;
