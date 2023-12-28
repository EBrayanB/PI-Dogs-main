const getAllDogsController = require ('../controllers/getAllDogsController');

const getDogsHandlerById = async (req,res) => {
    const id = req.params.id;
    const allDogs = await getAllDogsController();
    try {
        if(id){
            const dogsId = await allDogs.find(dog => dog.id == (id));
            dogsId ? res.status(200).send(dogsId) : res.status(404).json("Raza no encontrada");
        }
        
    } catch (error) {
        res.status(400).send(error.message);
    } 

}

module.exports = getDogsHandlerById;