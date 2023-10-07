const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Team = sequelize.define('Team', {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    team_name: {
      type: DataTypes.STRING(40),
      unique: true,
    },
    principal: {
      type: DataTypes.TEXT,
    },
    engine_supplier: {
      type: DataTypes.STRING(40),
    },
    country_represent: {
      type: DataTypes.STRING(40),
    },
  }, {
    tableName: 'team', 
    timestamps: false, 
  });
  return Team;
};
