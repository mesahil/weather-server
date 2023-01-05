const connectDB = require("./DB/connect");
const city = require("./model/city");
const cityJson = require("./city.json");

const start = async () => {
  try {
    connectDB();
    await city.create(cityJson);
    console.log("done");
  } catch (error) {
    console.log(error.message);
  }
};
start();
