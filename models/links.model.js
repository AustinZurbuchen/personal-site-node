const mongoose = require("mongoose");
const Links = new mongoose.Schema(
  {
    links: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Links", Links);
