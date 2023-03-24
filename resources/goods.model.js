const Sequelize = require('sequelize')

const sequelize = require('../util/database');

const Goods = sequelize.define('good', {
    product_id:{
      type:Sequelize.UUID, 
      defaultValue:Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true, 
    }, 
    product_name:{
      type:Sequelize.STRING, 
      allowNull: false,
      unique: true,
    }, 
    price:{
        type:Sequelize.INTEGER, 
        allowNull: true,
    }
    
  })
  
  module.exports = Goods;