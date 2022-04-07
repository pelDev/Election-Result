const Sequelize = require("sequelize");
const ckey = require("ckey");

const sequelize = new Sequelize(
  ckey.MYSQL_DATABASE,
  ckey.MYSQL_USER,
  ckey.MYSQL_PASSWORD,
  {
    host: ckey.MYSQL_HOST,
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.agentNames = require("./AgentName")(sequelize, Sequelize);
db.announcedLgaResults = require("./AnnouncedLgaResult")(sequelize, Sequelize);
db.announcedPuResults = require("./AnnouncedPuResult")(sequelize, Sequelize);
db.announcedStateResults = require("./AnnouncedStateResult")(
  sequelize,
  Sequelize
);
db.announcedWardResults = require("./AnnouncedWardResult")(
  sequelize,
  Sequelize
);
db.lgas = require("./Lga")(sequelize, Sequelize);
db.parties = require("./Party")(sequelize, Sequelize);
db.pollingUnits = require("./PollingUnit")(sequelize, Sequelize);
db.states = require("./State")(sequelize, Sequelize);
db.wards = require("./Ward")(sequelize, Sequelize);

module.exports = db;
