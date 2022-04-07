module.exports = (sequelize, Sequelize) => {
  const State = sequelize.define("state", {
    state_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    state_name: { type: Sequelize.STRING(50), allowNull: false },
  });

  return State;
};
