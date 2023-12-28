const {Router} = require ('express');
const getAllDogsHandler = require('../handlers/getAllDogsHandler');
const getDogsHandlerById = require ('../handlers/getDogsHandlerById');

const dogsRouter = Router();

dogsRouter.get('/',getAllDogsHandler);
dogsRouter.get('/:id' , getDogsHandlerById);

module.exports = {
    dogsRouter,
};