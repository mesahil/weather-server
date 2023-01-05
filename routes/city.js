const express = require("express");
const router = express.Router();
const { getAllCities } = require("../controller/city");

router.route("/").get(getAllCities);

module.exports = router;
