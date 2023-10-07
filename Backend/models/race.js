const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Race extends Model {
    
  }

  Race.init(
    {
      race_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      race_name: {
        type: DataTypes.STRING(40),
        unique: true,
      },
      race_date: {
        type: DataTypes.DATE,
        unique: true,
      },
      race_season: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      race_location: {
        type: DataTypes.STRING(40),
      },
    },
    {
      sequelize,
      modelName: 'Race',
      tableName: 'race',
      timestamps: false,
    }
  );
  
  return Race;
};
