const { DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dog', {
    ID:{
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type: DataTypes.STRING,

    },
    altura:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    añosDeVida:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
