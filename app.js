const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("tiny"));

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

// Routes middlewares
const postRoutes = require("./routes/post");
app.use("/posts", postRoutes);

module.exports = app;
