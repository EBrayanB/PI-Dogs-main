const getDogsApiController = require('./getDogsApiController');
const getDogsDataBaseController = require('./getDogsDataBaseController');

const getAllDogsController = async () => {
  const apiDogs = await getDogsApiController();
  const dbDogs = await getDogsDataBaseController();

  const allDogs = apiDogs.concat(dbDogs);
  return allDogs;
};

module.exports = getAllDogsController;
