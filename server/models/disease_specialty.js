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
      Disease_Specialty.belongsTo(models.Doctor)
      Disease_Specialty.belongsTo(models.Diseases)
    }
  };
  Disease_Specialty.init({
    DoctorId: DataTypes.INTEGER,
    DiseaseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Disease_Specialty',
  });
  return Disease_Specialty;
};