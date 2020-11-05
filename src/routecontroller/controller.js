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


module.exports = callBackfunction;