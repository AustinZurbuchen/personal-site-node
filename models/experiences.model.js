const mongoose = require("mongoose");
const Experiences = new mongoose.Schema(
  {
    school: {
      type: Array,
    },
    work: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Experiences", Experiences);
