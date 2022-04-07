module.exports = (sequelize, Sequelize) => {
  const Lga = sequelize.define("lga", {
    uniqueid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lga_id: { type: Sequelize.INTEGER, allowNull: false },
    lga_name: { type: Sequelize.STRING(50), allowNull: false },
    state_id: { type: Sequelize.INTEGER(50), allowNull: false },
    lga_description: Sequelize.TEXT,
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

  return Lga;
};
