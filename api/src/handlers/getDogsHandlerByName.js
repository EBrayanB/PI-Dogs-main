const getAllDogsController = require('../controllers/getAllDogsController');

const getDogsHandlerByName = async (req, res) => {
  const name = req.query.name;

  try {
    if (!name) {
      return res.status(400).json({ error: 'Por favor, proporciona un nombre en la query.' });
    }

    const allDogs = await getAllDogsController();

    const matchedDogs = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );

    if (matchedDogs.length === 0) {
      return res.status(404).json({ message: 'No se encontraron razas de perros con ese nombre.' });
    }

    res.status(200).json(matchedDogs);
  } catch (error) {
    console.error('Error al obtener las razas de perros por nombre:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = getDogsHandlerByName;
