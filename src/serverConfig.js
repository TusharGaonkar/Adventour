const express = require('express');
const chalk = require('chalk');
const path = require('path');
const app = require('./app');



const publicDirectory = path.join(__dirname, '../public');
const serverPort = 2500;




app.listen(serverPort,() => {
  
  console.log(chalk.inverse.green(`Server Started at port ${serverPort}`));
})




