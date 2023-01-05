const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  state: { type: String },
  country: { type: String, required: true },
  coord: { type: Object, required: true },
});

module.exports = mongoose.model("Citie", citySchema);
