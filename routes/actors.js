const express = require("express");
const {
  getActor,
  getActors,
  createActor,
  deleteActor,
  updateActor,
} = require("../controllers/actors.js");

const router = express.Router();

router.get("/", getActors);

router.post("/", createActor);

router.get("/:id", getActor);

router.delete("/:id", deleteActor);

router.patch("/:id", updateActor);

module.exports = router;
