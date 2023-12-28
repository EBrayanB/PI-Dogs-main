const getTemperamentsController = require('../controllers/getTemperamentsController');


const getTemperamentsHandler = async (req,res)=>{
    const temps = await getTemperamentsController();
    try {
        res.status(200).send(temps);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports = getTemperamentsHandler;
