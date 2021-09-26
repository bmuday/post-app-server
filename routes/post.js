const express = require("express");

const router = express.Router();

const { getPosts, createPost } = require("../controllers/post");

// ROUTES
router.get("/", getPosts);

router.post("/save", createPost);

module.exports = router;
