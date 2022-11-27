const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Connected to the MongoDB.");
  mongoose.connect(uri);
};

module.exports = connectDB;
