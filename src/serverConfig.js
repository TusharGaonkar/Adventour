const express = require('express');
const chalk = require('chalk');
const path = require('path');
const app = express();
const serverPort = 2400;
app.use(express.json());
const demoJson = {

  success : true,
  age : 21,
  data : {
    dataitems : "data"
  }
};

const callBackfunction = (req , res) => {

  res.status(200).send(demoJson);
}



const publicDirectory = path.join(__dirname, '../public');


app.get('', callBackfunction);


app.get('/api/v1.0/tours' , callBackfunction);
app.post('/api/v1.0/tours' , callBackfunction);



app.get('/api/v1.0/tours/:id' , callBackfunction);

app.patch('/api/v1.0/tours/:id' , callBackfunction);
app.delete('/api/v1.0/tours/:id', callBackfunction); 


app.listen(serverPort,() => {
  
  console.log(chalk.inverse.green(`Server Started at port ${serverPort}`));
})




