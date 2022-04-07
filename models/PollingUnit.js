module.exports = (sequelize, Sequelize) => {
  const PollingUnit = sequelize.define("polling_unit", {
    uniqueid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    polling_unit_id: { type: Sequelize.INTEGER, allowNull: false },
    ward_id: { type: Sequelize.INTEGER, allowNull: false },
    lga_id: { type: Sequelize.INTEGER, allowNull: false },
    uniquewardid: Sequelize.INTEGER,
    polling_unit_number: Sequelize.STRING(50),
    polling_unit_name: Sequelize.STRING(50),
    polling_unit_description: Sequelize.TEXT,
    lat: Sequelize.STRING(255),
    long: Sequelize.STRING(255),
    entered_by_user: Sequelize.STRING(50),
    date_entered: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    user_ip_address: Sequelize.STRING(50),
  });

  return PollingUnit;
};
