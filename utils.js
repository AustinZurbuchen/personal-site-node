if (require("dotenv").config().error) {
  throw ".env file is missing";
}

const models = require("./models");

async function getAbilities() {
  return new Promise(async (resolve, reject) => {
    try {
      let abilities = await models("abilities").find({});
      //   console.log(abilities[0]);
      resolve(abilities[0]);
    } catch (err) {
      //   console.log(err);
      reject(err);
    }
  });
}
module.exports = {
  getAbilities: getAbilities,
};
