// .env file is necessary on project root directory
if (require("dotenv").config().error) throw ".env file is missing";

// var http = require("http");
// const axios = require("axios");
const cors = require("cors");
// const fs = require("fs");
// const { resolve } = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const models = require("./models");
const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log("Someone connected!!");

  res.write("<html><body><p>This is the home route.</p></body></html>");
  res.end();
});

app.post("/data", (req, res) => {
  const data = getData();
  console.log(data);
  res.send(data);
  res.end();
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist");
});

app.listen(5001, "localhost", () => {
  console.log("Listening on port 5001");
});

function getData() {
  //   mongoose.connect(dbUrl);
  //   console.log(models.models);
  mongoose.connect(dbUrl, { useNewUrlParser: true }, async (err) => {
    try {
      const abilities = await models("Abilities").find();
      //   console.log(abilities);
      return abilities;
    } catch (ex) {
      console.log(err);
    }
  });
  return;
}
