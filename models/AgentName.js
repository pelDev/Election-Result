module.exports = (sequelize, Sequelize) => {
  const AgentName = sequelize.define("agentname", {
    name_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: { type: Sequelize.STRING(255), allowNull: false },
    lastname: { type: Sequelize.STRING(255), allowNull: false },
    email: Sequelize.STRING(255),
    phone: { type: Sequelize.CHAR(13), allowNull: false },
    pollingunit_uniqueid: Sequelize.INTEGER,
  });

  return AgentName;
};
