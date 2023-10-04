const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Circuit = sequelize.define('Circuit',
    {
      circuit_name: {
        type: DataTypes.STRING(40),
        unique: true,
      },
      location: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },
      length: {
        type: DataTypes.DECIMAL(10, 2),
      },
      capacity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'circuit',
      timestamps: false,
    }
  );

  return Circuit;
};
