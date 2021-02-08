'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flightdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Flightdata.init({
    long: DataTypes.STRING,
    speed: DataTypes.STRING,
    temp: DataTypes.STRING,
    lat: DataTypes.STRING,
    alt: DataTypes.STRING,
    time: DataTypes.STRING,
    droneName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flightdata',
  });
  return Flightdata;
};