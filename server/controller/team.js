const Team = require("../models/team");

async function findAllTeams(req, res) {
  try {
    const allTeams = await Team.find({});
    // console.log(allTeams);
    res.send({ teams: allTeams });
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function seedAllTeams(req, res) {
  try {
    const manchesterUnited = await Team.find({ name: "Manchester United" });

    if (Array.isArray(manchesterUnited) && manchesterUnited.length < 1) {
      const insertManU = await Team.create({
        name: "Manchester United",
        color: "#DA291C",
      });
    }
    const manchesterCity = await Team.find({ name: "Manchester City" });

    if (
      (Array.isArray(manchesterCity) && manchesterCity.length < 1) ||
      !Array.isArray(manchesterCity)
    ) {
      const insertManC = await Team.create({
        name: "Manchester City",
        color: "#ADD8E6",
      });
    }

    const leicesterCity = await Team.find({ name: "Leicester City" });
    console.log("leicester City found? ", leicesterCity);
    if (
      (Array.isArray(leicesterCity) && leicesterCity.length < 1) ||
      !Array.isArray(leicesterCity)
    ) {
      const leicester = await Team.create({
        name: "Leicester City",
        color: "#0053A0",
      });
    }

    res.send({ message: "teams inserted into db" });
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

module.exports = {
  findAllTeams,
  seedAllTeams,
};
