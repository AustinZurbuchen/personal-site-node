const mongoose = require("mongoose");
const Abilities = new mongoose.Schema(
  {
    languages: {
      type: Array,
    },
    technologies: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Abilities", Abilities);
