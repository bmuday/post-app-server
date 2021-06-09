const http = require("http");
const app = require("./app");

// For deployment
// process.env.PORT
// process.env.NODE_ENV => production or undefined
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

// CREATE SERVER HTTP
app.set("port", PORT);
const server = http.createServer(app);

// CONNECT TO DATABASE
const db = require("./db");

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
