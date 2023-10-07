const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Driver = sequelize.define('Driver', {
    driver_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(40),
    },
    last_name: {
      type: DataTypes.STRING(40),
    },
    year_active: {
      type: DataTypes.INTEGER,
    },
    nationality: {
      type: DataTypes.STRING(40),
    },
    point: {
      type: DataTypes.DECIMAL(10, 2),
    },
    team_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Team', 
        key: 'team_id', 
      }
    },
  }, {
    tableName: 'driver',
    timestamps: false,
  });
  
  return Driver;
};
