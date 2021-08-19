const mongoose = require("mongoose");

const { Schema } = mongoose;

const spendScheme = new Schema({
  shop: String,
  spend: Number,
  date: String
});

module.exports = Spend = mongoose.model("spends", spendScheme);