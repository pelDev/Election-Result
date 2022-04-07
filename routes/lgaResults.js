const router = require("express").Router();

const { getLgaResults, setSelected } = require("../controllers/lgaResults");

router.route("/").get(getLgaResults);

module.exports = router;
