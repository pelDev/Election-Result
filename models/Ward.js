module.exports = (sequelize, Sequelize) => {
  const Ward = sequelize.define("ward", {
    uniqueid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ward_id: { type: Sequelize.INTEGER, allowNull: false },
    ward_name: { type: Sequelize.STRING(50), allowNull: false },
    lga_id: { type: Sequelize.INTEGER, allowNull: false },
    ward_description: Sequelize.TEXT,
    entered_by_user: { type: Sequelize.STRING(50), allowNull: false },
    date_entered: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    user_ip_address: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
  });

  return Ward;
};
