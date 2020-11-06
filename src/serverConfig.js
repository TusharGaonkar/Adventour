
const express = require('express');
const process = require('./../env');
const mongoose = require('mongoose')
const chalk = require('chalk');
const path = require('path');
const app = require('./app');
const publicDirectory = path.join(__dirname, '../public');
const PORT = process.env.PORT || 1000;




mongoose.connect(process.env.DB , {

  useNewUrlParser :true,
  useCreateIndex : true,
  userFindAndModify : false,


}).then((responsne)=>{
  console.log(chalk.inverse.cyan("Advantours Db is connected"))
})





app.listen(PORT,() => {
  
  console.log(chalk.inverse.green(`Server Started at port ${PORT}`));
})




