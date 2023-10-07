const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('formula1','tmdbuser','tmdbuser',{
  host:'localhost',
  dialect:'mysql',
});

const CircuitModel = require('./models/circuit')(sequelize);
const RaceModel = require('./models/race')(sequelize);
const TeamModel = require('./models/team')(sequelize);
const DriverModel = require('./models/driver')(sequelize);
const DriverRaceModel = require('./models/driverRace')(sequelize);
const ResultModel = require('./models/result')(sequelize);

const models = {
  sequelize,
  Circuit : CircuitModel,
  Race : RaceModel,
  Team : TeamModel,
  Driver : DriverModel,
  DriverRace : DriverRaceModel,
  Result : ResultModel,
};

const associateModels = require('./models/association');
associateModels(models);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Models synchronized with the database.');
  })
  .catch((error) => {
    console.error('Error synchronizing models with the database:', error);
  });

// Use the cors middleware with specific options to allow requests from your Angular app's origin
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

const circuitRoute = require('./routes/circuitRoute.js');
const raceRoute = require('./routes/raceRoute.js');
const teamRoute = require('./routes/teamRoute.js');
const driverRoute = require('./routes/driverRoute.js');
const driverRaceRoute = require('./routes/driverRaceRoute.js');
const resultRoute = require('./routes/resultRoute.js');

app.use('/api/circuits', circuitRoute(models.Circuit));
app.use('/api/races', raceRoute(models.Race));
app.use('/api/teams', teamRoute(models.Team));
app.use('/api/drivers', driverRoute(models.Driver,models.Team));
app.use('/api/driversRace', driverRaceRoute(models.DriverRace,models.Driver));
app.use('/api/result', resultRoute(models.Driver,models.Result,models.Race,models.DriverRace));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = {
  sequelize, // Export the Sequelize instance
  models,  // Export the models
};