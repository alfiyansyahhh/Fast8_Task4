const express = require('express');
const { 
    getData,
} = require('../controller/index.controler');

const dataRouter = express.Router();

dataRouter
.get('/', getData)


module.exports = dataRouter;