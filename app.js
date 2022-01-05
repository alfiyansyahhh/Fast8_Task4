const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const data = require('./src/router/index.router')
const PORT = process.env.PORT


const app  = express()
app.use(bodyparser.json())
app.use(data)

app.listen(PORT, () => {
    console.log(`Service running on Port ${PORT}`);
});

module.exports = app;