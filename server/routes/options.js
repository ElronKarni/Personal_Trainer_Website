const express = require("express");
const router = express.Router();
const Option = require("../models/Option");

router.get("/", async (req, res) => {
  try {
    const options = await Option.find();
    res.json(options);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const submitOption = new Option({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const postOption = await submitOption.save();
    res.json(postOption);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
