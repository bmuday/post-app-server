const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// CONNECT TO DATABASE
const db = require("./db");

// Server
app.set("port", PORT);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
