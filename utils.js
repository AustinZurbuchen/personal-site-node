if (require("dotenv").config().error) {
  throw ".env file is missing";
}

const models = require("./models");

async function getAbilities() {
  return new Promise(async (resolve, reject) => {
    try {
      let abilities = await models("abilities").find({});
      resolve(abilities[0]);
    } catch (err) {
      reject(err);
    }
  });
}

async function getExperiences() {
  return new Promise(async (resolve, reject) => {
    try {
      let experiences = await models("experiences").find({});
      resolve(experiences[0]);
    } catch (err) {
      reject(err);
    }
  });
}

async function getLinks() {
  return new Promise(async (resolve, reject) => {
    try {
      let links = await models("links").find({});
      resolve(links[0]);
    } catch (err) {
      reject(err);
    }
  });
}

async function getProfile() {
  return new Promise(async (resolve, reject) => {
    try {
      let profile = await models("profile").find({});
      console.log(profile);
      resolve(profile[0]);
    } catch (err) {
      reject(err);
    }
  });
}

async function getQuotes() {
  return new Promise(async (resolve, reject) => {
    try {
      let quotes = await models("quotes").find({});
      resolve(quotes[0]);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  getAbilities: getAbilities,
  getExperiences: getExperiences,
  getLinks: getLinks,
  getProfile: getProfile,
  getQuotes: getQuotes,
};
