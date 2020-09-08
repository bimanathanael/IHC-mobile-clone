'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hospital.hasOne(models.Location)
      Hospital.belongsToMany(models.Doctor, {through : "Work_Places"})
    }
  };
  Hospital.init({
    name: DataTypes.STRING,
    LocationId: DataTypes.INTEGER,
    fullAddress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};