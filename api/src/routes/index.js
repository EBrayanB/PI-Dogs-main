const { Router } = require('express');
const RouterDogs = require('./Dogs');
const RouterTemperaments = require('./Temperaments');

const router = Router();

// Configurar los routers
router.use('/dogs', RouterDogs);
router.use('/temperaments', RouterTemperaments);

module.exports = router;
