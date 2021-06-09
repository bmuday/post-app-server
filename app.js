const express = require("express");
const app = express();

const logger = require("morgan");

const cors = require("cors");

// CORS
app.use(cors());
/* app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
}); */

// Middlewares

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP Request Logger
app.use(logger("combined"));

// Heroku deployment test
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

// Routes middlewares
const routes = require("./routes/api");
app.use("/api", routes);

module.exports = app;
