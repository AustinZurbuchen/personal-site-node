// .env file is necessary on project root directory
if (require("dotenv").config().error) throw ".env file is missing";

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const utils = require("./utils");
const app = express();
const models = require("./models");
const mongoose = require("mongoose");
const { cannotHaveAUsernamePasswordPort } = require("whatwg-url");
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
    res.send(data);
    console.log("data returned");
    res.end();
  });
});

app.post("/getExperiences", (req, res) => {
  console.log("getExperiences called");
  utils.getExperiences().then((data) => {
    res.send(data);
    console.log("data returned");
    res.end();
  });
});

app.post("/getLinks", (req, res) => {
  console.log("getLinks called");
  utils.getLinks().then((data) => {
    res.send(data);
    console.log("data returned");
    res.end();
  });
});

app.post("/getProfile", (req, res) => {
  console.log("getProfile called");
  utils.getProfile().then((data) => {
    res.send(data);
    console.log("data returned");
    res.end();
  });
});

app.post("/getProfileData", (req, res) => {
  console.log("getProfileData called");
  utils.getProfileData().then((data) => {
    res.send(data);
    console.log("data returned");
    res.end();
  });
});

app.post("/getQuotes", (req, res) => {
  console.log("getQuotes called");
  utils.getQuotes().then((data) => {
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
