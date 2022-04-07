const asyncHandler = require("../middlewares/async");
const db = require("../models");

const nonPartKeys = [
  "polling_unit_id",
  "polling_unit_name",
  "polling_unit_description",
  "ward_id",
  "lga_id",
];

exports.setUpAddPage = asyncHandler(async (_, res, __) => {
  const wards = await db.wards.findAll();
  const lgas = await db.lgas.findAll();

  const parties = await db.parties.findAll();

  res.render("pages/addresult", {
    wards,
    lgas,
    parties,
  });
});

exports.storeResult = asyncHandler(async (req, res, _) => {
  const wards = await db.wards.findAll();
  const lgas = await db.lgas.findAll();
  const parties = await db.parties.findAll();

  let success = false;

  const {
    polling_unit_id,
    ward_id,
    lga_id,
    polling_unit_name,
    polling_unit_description,
  } = req.body;

  if (!polling_unit_id || !ward_id) {
    success = false;
  } else {
    const polligUnit = new db.pollingUnits({
      polling_unit_id: Number(polling_unit_id),
      ward_id: Number(ward_id),
      lga_id: Number(lga_id),
      polling_unit_name,
      polling_unit_description,
    });

    await polligUnit.save();

    Object.keys(req.body).map(async (key) => {
      if (!nonPartKeys.includes(key)) {
        await db.announcedPuResults.create({
          polling_unit_uniqueid: polligUnit.uniqueid,
          party_abbreviation: key.length > 4 ? key.substring(0, 4) : key,
          party_score: req.body[key],
          entered_by_user: "Akinrele Pelumi",
          user_ip_address: "127.0.0.1",
        });
      }
    });
  }

  res.render("pages/addresult", {
    success,
    wards,
    lgas,
    parties,
  });
});
