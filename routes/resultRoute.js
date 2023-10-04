const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

module.exports = (Driver, Result, Race, DriverRace) => {
  router.get('/drivers/:race_id', async (req, res) => {
    try {
      const raceId = req.params.race_id;

      // Find all drivers associated with the specified race
      const results = await Result.findAll({
        where: {
          race_id: raceId,
        },
        attributes: [
          'position',
          'podium',
          'fastest_lap_rate',
          'win_rate',
        ],
        include: [
          {
            model: Driver,
            attributes: [
              'first_name',
              'last_name',
              'year_active',
              'nationality',
              'point',
            ],
          },
        ],
      });

      if (!results) {
        return res.status(404).json({ error: 'No results found for this race' });
      }

      // Find race details
      const racedetails = await Race.findByPk(raceId, {
        attributes: [
          'race_name',
          'race_date',
          'race_location',
        ],
      });

      const response = {
        results: results.map((result) => ({
          position: result.position,
          podium: result.podium,
          fastest_lap_rate: result.fastest_lap_rate,
          win_rate: result.win_rate,
          first_name: result.Driver.first_name,
          last_name: result.Driver.last_name,
          year_active: result.Driver.year_active,
          nationality: result.Driver.nationality,
          point: result.Driver.point,
        })),
        racedetails: {
          race_name: racedetails.race_name,
          race_date: racedetails.race_date,
          race_location: racedetails.race_location,
        },
      };

      res.json(response);
    } catch (error) {
      console.error('Error retrieving results:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  return router;
};
