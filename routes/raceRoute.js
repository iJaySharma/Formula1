const express = require('express');
const router = express.Router();

module.exports = (Race) => {
router.get('/:location', async (req, res) => {
  const location = req.params.location;

  try {
    const races = await Race.findAll({
      attributes: [
        'race_id',
        'race_name',
        'race_date',
        'race_season',
        'race_location',
      ],
      where: {
        race_location: location,
      },
    });
    races.sort((a, b) => a.race_name.localeCompare(b.race_name));

    res.json(races);
  } catch (error) {
    console.error('Error retrieving races:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/', async (req, res) => {
  
    try {
      const races = await Race.findAll({
        attributes: [
          'race_id',
          'race_name',
          'race_date',
          'race_season',
          'race_location',
        ]
      });
      
      res.json(races);
    } catch (error) {
      console.error('Error retrieving races:', error);
      res.status(500).send('Internal Server Error');
    }
  });

 
return router;
}