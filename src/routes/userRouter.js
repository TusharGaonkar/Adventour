const express = require('express');
const callBackfunction = require('./../routecontroller/controller');
const  userRouter = express.Router();


userRouter
.route('/')
.get(callBackfunction)
.post(callBackfunction)

userRouter
.route('/:id')
.patch(callBackfunction)
.delete(callBackfunction)


module.exports = userRouter;

