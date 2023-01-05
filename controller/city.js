const city = require("../model/city");
const getAllCities = async (req, res) => {
  const search = req.query.name;
  const data = await city
    .find({ name: new RegExp("^" + search, "i") })
    .limit(5);
  res.status(200).json(data);
};
module.exports = { getAllCities };
