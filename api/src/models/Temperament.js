const {DataTypes} = require ("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('Temperament',{
       ID:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         unique: true,
         defaultValue: DataTypes.UUIDV4,
            
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
};