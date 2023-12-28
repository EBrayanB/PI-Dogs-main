const { Router } = require('express');
const getTemperamentsHandler = require('../handlers/getTemperamentsHandler');

const temperamentsRouter = Router();

temperamentsRouter.get('/', getTemperamentsHandler);

module.exports = {
    temperamentsRouter,
};

