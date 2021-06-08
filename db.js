const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { username, password, database } = process.env;

// DB connection
const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.nnbxv.mongodb.net/${database}?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});
