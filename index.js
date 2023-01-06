const express = require("express");
const connectDB = require("./DB/connect");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const city_route = require("./routes/city");
app.use(cors());
// app.get("/", (req, res) => {
//   res.status(200).json({ test: "ok" });
// });
app.use("/api", city_route);

app.listen(PORT, () => {
  console.log("connected");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("weather/build"));
}
try {
  connectDB();
} catch (error) {
  console.log("connection error", error.message);
}
