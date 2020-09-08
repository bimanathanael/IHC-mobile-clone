'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work_Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Work_Place.init({
    doctor_id: DataTypes.INTEGER,
    hospital_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Work_Place',
  });
  return Work_Place;
};