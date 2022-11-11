const express = require("express");
const router = express.Router();
const Program = require("../models/Program");

//Get all Programs
router.get("/", async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post a Program

router.post("/", async (req, res) => {
  const submitProgram = new Program({
    title: req.body.title,
    description: req.body.description,
    image: req.body.img
  });

  try {
    const savedProgram = await submitProgram.save();
    res.json(savedProgram);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
