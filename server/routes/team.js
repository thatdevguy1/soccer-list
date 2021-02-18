let router = require("express").Router();
let teamCtrl = require("../controller/team");

router.get("/getAllTeams", teamCtrl.findAllTeams);
router.get("/seedAllTeams", teamCtrl.seedAllTeams);

module.exports = router;
