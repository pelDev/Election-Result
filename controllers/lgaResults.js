const asyncHandler = require("../middlewares/async");
const db = require("../models");

exports.getLgaResults = asyncHandler(async (req, res, next) => {
  let selected = req.query.selectpicker;
  let result = null;

  const lgas = await db.lgas.findAll();

  if (selected && selected > 0) {
    const lga = lgas.filter((lga) => lga.lga_id === Number(selected))[0];

    if (lga) {
      const lgaPollingUnits = await db.pollingUnits.findAll({
        where: { lga_id: lga.lga_id },
      });

      let score = 0;

      for (const { uniqueid } of lgaPollingUnits) {
        const unitResults = await db.announcedPuResults.findAll({
          where: { polling_unit_uniqueid: uniqueid },
        });

        let x = 0;

        while (x < unitResults.length) {
          score += unitResults[x].party_score;
          x++;
        }
      }

      result = { lga_name: lga.lga_name, score };
    }
  }

  console.log("RESULT", result, selected);

  res.render("pages/lgaresults", {
    result,
    lgas,
    tagline: "Result for Selected Local Government Area",
    selected,
  });
});
