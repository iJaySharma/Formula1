const express = require('express');
const router = express.Router();

module.exports = (DriverRace,Driver) => {
router.get('/drivers/:race_id', async (req, res) => {

  try {
    const raceId = req.params.race_id;
    const driverRaceRecords = await DriverRace.findAll({
      where: {
        race_id: raceId,
      },
    });

    const driverIds = driverRaceRecords.map((record) => record.driver_id);

    const drivers = await Driver.findAll({
      attributes: [
       'first_name', 
       'last_name', 
       'year_active', 
       'nationality', 
       'point',
      ],

      where: {
        driver_id: driverIds,
      },
    });

    res.json(drivers);
  } catch (error) {
    console.error('Error retrieving races:', error);
    res.status(500).send('Internal Server Error');
  }
});

return  router;
}
