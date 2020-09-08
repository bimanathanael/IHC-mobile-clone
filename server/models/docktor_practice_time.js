'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Docktor_Practice_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Docktor_Practice_Time.init({
    doctor_id: DataTypes.INTEGER,
    practice_time_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Docktor_Practice_Time',
  });
  return Docktor_Practice_Time;
};