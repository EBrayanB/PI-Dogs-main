const axios = require ('axios');
require ('dotenv').config();
const {API_KEY} = process.env;

const getDogsApiController = async ()=>{
     const getApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
     const mapData = await getApi.data.map(dog =>{
         return{
            id: dog.id,
             name: dog.name,
             weight: dog["weight"]["metric"],
             height: dog["height"]["metric"],
             age: dog.life_span,
             image: dog.image ? dog.image.url : null,  // Asegúrate de que dog.image esté definido
               temperament: dog.temperament?.split(",").map(temperament => temperament.trim()).filter((item, index, self) => self.indexOf(item) === index),
         }
     });
     return mapData
}

module.exports = getDogsApiController;

