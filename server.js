// .env file is necessary on project root directory
if (require("dotenv").config().error) throw ".env file is missing";

// var http = require("http");
// const axios = require("axios");
const cors = require("cors");
// const fs = require("fs");
// const { resolve } = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const utils = require("./utils");
const app = express();
const models = require("./models");
const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(dbUrl, { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log("Someone connected!!");

  res.write("<html><body><p>This is the home route.</p></body></html>");
  res.end();
});

app.post("/getAbilities", (req, res) => {
  console.log("getAbilities called");
  utils.getAbilities().then((data) => {
    // console.log(data);
    res.send(data);
    console.log("data returned");
    res.end();
  });
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist");
});

app.listen(5001, "localhost", () => {
  console.log("Listening on port 5001");
});
