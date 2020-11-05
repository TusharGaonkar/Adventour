const express = require('express');
const chalk = require('chalk');
const path = require('path');

app.set('view engine','hbs');

const app = express();
const publicDirectory = path.join(__dirname, '../public');


app.get('' , (req ,res)=>{
 res.send("Hello world fdfdf=dsddikmdfkmdkftushar")
})

app.listen(3000, ()=> {
 
  console.log(chalk.inverse.green('Server is up and running on port 3000'));
})



