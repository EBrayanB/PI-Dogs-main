const {Router} = require ('express');
const getAllDogsHandler = require('../handlers/getAllDogsHandler');
const getDogsHandlerById = require ('../handlers/getDogsHandlerById');
const getDogsHandlerByName = require ('../handlers/getDogsHandlerByName');

const dogsRouter = Router();

dogsRouter.get('/',getAllDogsHandler);
dogsRouter.get('/:id' , getDogsHandlerById);
dogsRouter.get('/name', getDogsHandlerByName);

module.exports = {
    dogsRouter,
};