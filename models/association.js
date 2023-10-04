const associateModels = (models) => {
    const { Circuit, Race, Team, Driver, DriverRace,Result } = models;
  
    Circuit.hasMany(Race, { foreignKey: 'location' });
    Race.belongsTo(Circuit, { foreignKey: 'race_location' });
    Team.hasMany(Driver, {foreignKey: 'team_id'});
    Driver.belongsTo(Team, {foreignKey: 'team_id'});
    DriverRace.hasMany(Driver, {foreignKey: 'driver_id'});
    DriverRace.hasMany(Race, {foreignKey: 'race_id'})
    Driver.belongsTo(DriverRace, {foreignKey: 'driver_id'});
    Race.belongsTo(DriverRace, {foreignKey: 'race_id'});
    Result.belongsTo(Driver, { foreignKey: 'driver_id' });
    Result.belongsTo(Race, {foreignKey: 'race_id' });
  };
  
  module.exports = associateModels;
  