const Sequelize = require('sequelize')

const sequelize = require('../util/database');

const Goods = sequelize.define('good', {
    product_id:{
      type:Sequelize.INTEGER, 
      autoIncrement: true,
      allowNull: false,
      primaryKey: true, 
    }, 
    product_name:{
      type:Sequelize.STRING, 
      allowNull: false,
    }, 
    price:{
        type:Sequelize.INTEGER, 
        allowNull: true,
    }
  })
  
  module.exports = Goods;