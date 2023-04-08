const express
    = require('express')
const dotenv
    = require('dotenv')
const {response} = require("express");
const port = process.env.PORT || 5000;

const app = express();


app.listen(port, () => {
    console.log(`start server ${port}`)
})

app.use('/api/goals', require('./routes/goalRoutes'))

