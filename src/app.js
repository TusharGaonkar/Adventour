const express = require('express')
const app = express()
app.use(express.json());
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
app.use('/api/v1.0/tours' , tourRouter)
app.use('/api/v1.0/users' , userRouter)



module.exports = app;