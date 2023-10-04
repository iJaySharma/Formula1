const express = require('express');
const router = express.Router();

module.exports = (Driver,Team) =>{
router.get('/team/:team_id', async (req, res) => {

  try {
    const id = req.params.team_id;
    const drivers = await Driver.findAll({
      attributes: ['driver_id', 'first_name', 'last_name', 'year_active', 'nationality', 'point', 'team_id'],
where:{
team_id:id,
},
    });

    res.json(drivers);
  } catch (error) {
    console.error('Error retrieving driver:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/', async (req, res) => {

  try {
    const drivers = await Driver.findAll({
      attributes: [
        'driver_id',
        'first_name',
        'last_name',
        'year_active',
        'nationality',
        'point',
        'team_id',
      ],
      include: [
        {
          model:Team,
          attributes: [
            'team_name',
            'principal', 
            'engine_supplier', 
            'country_represent'
          ],
        },
      ],
    });

    res.json(drivers);
  } catch (error) {
    console.error('Error retrieving driver:', error);
    res.status(500).send('Internal Server Error');
  }
});

return router;
}
