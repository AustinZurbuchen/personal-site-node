// .env file is necessary on project root level
if (require("dotenv").config().error) throw ".env file is missing";

const mongoose = require("mongoose");
const dburl = process.env.DB_URL;
const dbModels = require("../models")(mongoose);

mongoose.connect(dburl, { useNewUrlParser: true }, async (err) => {});
