const { Dog, Temperament } = require('../db');

const createDogHandler = async (req, res) => {
  try {
    const { name, weight, height, age, image, temperaments } = req.body;

    // Verificar si los datos requeridos están presentes en el body
    if (!name || !weight || !height || !age || !image || !temperaments || temperaments.length === 0) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios, incluyendo al menos un temperamento.' });
    }

    // Crear el perro en la base de datos
    const createdDog = await Dog.create({
      name,
      weight,
      height,
      age,
      image,
    });

    // Obtener o crear los temperamentos asociados
    const createdTemperaments = await Promise.all(
      temperaments.map(async (temperamentName) => {
        return await Temperament.findOrCreate({
          where: { name: temperamentName },
        });
      })
    );

    // Asociar los temperamentos al perro
    await createdDog.setTemperaments(createdTemperaments.map((temperament) => temperament[0]));

    res.status(201).json({ message: 'Perro creado exitosamente.', createdDog });
  } catch (error) {
    console.error('Error al crear un perro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = createDogHandler;
