const express = require("express");
const logger = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors());
/* app.use((req, res, next) => {
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

// Database Connection
const db = require("./db");

// Middlewares

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP Request Logger
app.use(logger("combined"));

// For deployment
// process.env.PORT
// process.env.NODE_ENV => production or undefined

// Heroku deployment test
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

// Routes middlewares
const routes = require("./routes/api");
app.use("/api", routes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
