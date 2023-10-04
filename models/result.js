const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.models = {};

  const Result = sequelize.define(
    'Result',
    {
      position: {
        type: DataTypes.INTEGER,
      },
      podium: {
        type: DataTypes.INTEGER,
      },
      fastest_lap_rate: {
        type: DataTypes.DECIMAL(10, 2),
      },
      win_rate: {
        type: DataTypes.DECIMAL(10, 5),
      },
      driver_id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
      },
      race_id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
      },
    },
    {
      tableName: 'result',
      timestamps: false,
      freezeTableName: true,
    }
  );


  return Result;
};
