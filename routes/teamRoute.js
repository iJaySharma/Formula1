const express = require('express');
const router = express.Router();

module.exports = (Team) => {
router.get('/', async (req, res) => {

  try {
    
    const teams = await Team.findAll()

    res.json(teams);
  } catch (error) {
    console.error('Error retrieving races:', error);
    res.status(500).send('Internal Server Error');
  }
});
return router
}
