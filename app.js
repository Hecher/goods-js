const express = require("express");
const app = express();

const categoriesRouter = require("./resources/categories.router");
const goodsRouter = require("./resources/goods.router");

const sequelize = require('./util/database')

const Categories = require('./resources/categories.model');
const Goods = require('./resources/goods.model');

Categories.hasMany(Goods);

sequelize.sync().then(result =>{
  console.log(result);
}).catch((err)=>{
  console.log(err);
})

app.use(express.json());


app.use(express.static(__dirname + '/public'));


app.use('/api/category', categoriesRouter);
app.use('/api/goods', goodsRouter);
app.listen(3000, function(err){
  if(err) console.log(err);
});


module.exports = app;
