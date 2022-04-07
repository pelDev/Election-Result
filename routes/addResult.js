const router = require("express").Router();

const { setUpAddPage, storeResult } = require("../controllers/addResult");

router.route("/").get(setUpAddPage).post(storeResult);

module.exports = router;
