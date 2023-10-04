const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.models = {};

  const DriverRace = sequelize.define(
    'DriverRace',
    {
      driver_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,       },
      race_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,       },
    },
    {
      tableName: 'DriverRace',
      timestamps: false,
      freezeTableName: true,
    }
  );
  
  return DriverRace;
};
