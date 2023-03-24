const {Sequelize} = require('sequelize')

const sequelize = require('../util/database');

const Categories = sequelize.define('categories', {
  category_id:{
    type:Sequelize.UUID, 
    defaultValue:Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true, 
  }, 
  category_name:{
    type:Sequelize.STRING, 
    allowNull: false,
    unique: true,
  }, 
})

module.exports = Categories;