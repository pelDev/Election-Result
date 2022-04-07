module.exports = (sequelize, Sequelize) => {
  const Party = sequelize.define("party", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    partyid: { type: Sequelize.STRING(11), allowNull: false },
    partyname: { type: Sequelize.STRING(11), allowNull: false },
  });

  return Party;
};
