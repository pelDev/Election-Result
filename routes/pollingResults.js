const router = require("express").Router();

const { getPollingUnitResults } = require("../controllers/pollingResults");

router.route("/").get(getPollingUnitResults);

module.exports = router;
