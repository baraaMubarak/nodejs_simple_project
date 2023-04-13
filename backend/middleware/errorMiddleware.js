const dotenv
    = require('dotenv').config()
const errorHandler = (err, req, res, next) => {
    console.log(process.env.NODE_ENV)
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null
    })
}
module.exports = {
    errorHandler
}