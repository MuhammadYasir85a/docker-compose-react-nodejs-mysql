module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  return Tutorial;
};