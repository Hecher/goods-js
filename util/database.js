const Sequelize = require("sequelize");

const sequelize = new Sequelize("aboba", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  port:'5433'
});

module.exports = sequelize;