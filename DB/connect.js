const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.URL;

const connectDB = () => {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
