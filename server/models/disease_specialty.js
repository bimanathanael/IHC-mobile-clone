'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disease_Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Disease_Specialty.init({
    doctor_id: DataTypes.INTEGER,
    disease_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Disease_Specialty',
  });
  return Disease_Specialty;
};