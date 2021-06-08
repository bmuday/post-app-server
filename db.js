const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { username, password, database } = process.env;

// DB connection
if (process.env.NODE_ENV === "production") {
  const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.nnbxv.mongodb.net/${database}?retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});
