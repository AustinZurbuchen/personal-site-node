const mongoose = require("mongoose");
const ProfileData = new mongoose.Schema(
  {
    profileData: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ProfileData", ProfileData);
