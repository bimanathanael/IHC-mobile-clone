'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.hasOne(models.Doctor_Type)
      Doctor.belongsToMany(models.Hospital, {through : "Work_Places"})
      Doctor.belongsToMany(models.Skill, {through : "Specialties"})
      Doctor.belongsToMany(models.Diseases, {through : "Disease_Specialties"})
      Doctor.belongsToMany(models.Practice_time, {through : "Docktor_Practice_Times"})
    }
  };
  Doctor.init({
    name: DataTypes.STRING,
    photo: DataTypes.TEXT,
    gender: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    hospital_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};