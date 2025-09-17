'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class License extends Model {
    static associate(models) {
      License.belongsTo(models.People, {
        foreignKey: 'student_id'
      })

      License.belongsTo(models.Course, {
        foreignKey: 'course_id'
      })
    }
  }
  License.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'License',
    tableName: 'licenses',
  });
  return License;
};