const express
    = require('express')
const dotenv
    = require('dotenv').config()
const colors = require('colors')
const {response} = require("express");
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000;

const app = express();

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port, () => {
    console.log(`start server ${port}`)
})
