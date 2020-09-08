'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diseases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Diseases.belongsToMany(models.Doctor, {through : "Disease_Specialties"})

    }
  };
  Diseases.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diseases',
  });
  return Diseases;
};