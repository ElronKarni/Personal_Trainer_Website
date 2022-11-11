const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Get all the Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a Post
router.post("/", async (req, res) => {
  const submitPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await submitPost.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific Post
router.get("/:postId", async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.postId);
    res.json(specificPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Deleting a Post
router.delete("/:postId", async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.postId);
    res.json(`${deletePost.title} Got Deleted`);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a Post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(`${updatePost} Got Updated`);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
