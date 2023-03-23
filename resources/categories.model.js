const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../util/database');

const Categories = sequelize.define('categories', {
  category_id:{
    type:Sequelize.UUID, 
    defaultValue:Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true, 
  }, 
  category_name:{
    type:DataTypes.STRING(64), 
    allowNull: false,
  }, 
})

module.exports = Categories;