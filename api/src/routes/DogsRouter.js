const {Router} = require ('express');
const getAllDogsHandler = require('../handlers/getAllDogsHandler');

const dogsRouter = Router();

dogsRouter.get('/',getAllDogsHandler);

module.exports = {
    dogsRouter,
};