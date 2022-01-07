const mongoose = require("mongoose");
const Profile = new mongoose.Schema(
  {
    profile: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Profile", Profile);
