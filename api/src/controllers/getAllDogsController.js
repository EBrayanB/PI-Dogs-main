require('dotenv').config;
const getDogsApiController = require ('./getDogsApiController');
const getDogsDataBaseController = require ('./getDogsDataBaseController');

const getAllDogsController = async ()=>{
    const apiDogs = await getDogsApiController();
    let dbDogs = await getDogsDataBaseController();
    const allDogs = apiDogs.concat(dbDogs);
    return allDogs; 
}

module.exports = getAllDogsController;