module.exports = (sequelize, Sequelize) => {
  const AnnouncedPuResult = sequelize.define("announced_pu_results", {
    result_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    polling_unit_uniqueid: { type: Sequelize.STRING(50), allowNull: false },
    party_abbreviation: { type: Sequelize.CHAR(4), allowNull: false },
    party_score: { type: Sequelize.INTEGER, allowNull: false },
    entered_by_user: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    date_entered: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    user_ip_address: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
  });

  return AnnouncedPuResult;
};
