const express = require('express')
const toursRouter = express.Router();
const callBackfunction = require('./../routecontroller/controller');

toursRouter
.route('/')
.get(callBackfunction)
.post( callBackfunction)

toursRouter
.route('/:id')
.patch(callBackfunction)
.delete(callBackfunction)



module.exports = toursRouter;