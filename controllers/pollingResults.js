const asyncHandler = require("../middlewares/async");
const db = require("../models");

exports.getPollingUnitResults = asyncHandler(async (req, res, next) => {
  const pollingUnits = await db.pollingUnits.findAll();

  const results = [];

  for (const { uniqueid, polling_unit_name } of pollingUnits) {
    const unitResults = await db.announcedPuResults.findAll({
      where: { polling_unit_uniqueid: uniqueid },
    });

    let score = 0;
    let x = 0;

    while (x < unitResults.length) {
      score += unitResults[x].party_score;
      x++;
    }

    if (score > 0) results.push({ polling_unit_name, score });
  }

  res.render("pages/pollingresults", {
    results,
    tagline: "Only Polling Units with votes will appear here",
  });
});
