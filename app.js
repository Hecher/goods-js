const express = require("express");
const app = express();

const categoriesRouter = require("./resources/categories.router");

const sequelize = require('./util/database')

const Categories = require('./resources/categories.model');
const Goods = require('./resources/goods.model');

Categories.hasMany(Goods);

sequelize.sync({
  force: true
}).then(result =>{
  console.log(result);
}).catch((err)=>{
  console.log(err);
})

app.use(express.json());


app.use('/', (req, res, next) => {
  if(req.originalUrl === '/'){
    res.send("server is running");
    return;
  }
  next();
}) 

app.use('/api/categories', categoriesRouter);
app.listen(3000);
module.exports = app;
