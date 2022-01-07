const mongoose = require("mongoose");
const Quotes = new mongoose.Schema(
  {
    quotes: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Quotes", Quotes);
