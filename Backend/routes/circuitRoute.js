const express = require('express');
const circuit = require('../models/circuit');
const router = express.Router();

module.exports = (Circuit) => {
router.get('/', async (req, res) => {
  try {
    const circuits = await Circuit.findAll({
      attribute:[
        'circuit_name',
        'location',
        'length',
        'capacity',
      ]
    });
    res.json(circuits);
  } catch (error) {
    console.error('Error retrieving circuits:', error);
    res.status(500).send('Internal Server Error');
  }
});

return router;
}
