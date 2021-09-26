const mongoose = require("mongoose");
require("dotenv").config();
const { username, password, database } = process.env;

// DB connection
const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.nnbxv.mongodb.net/${database}?retryWrites=true&w=majority`;
const db = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose is connected!!!");
  })
  .catch((err) => console.error(err));

module.exports = db;
