const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  date: Date
});

module.exports = mongoose.model("Product", productSchema);
