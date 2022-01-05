const axios = require('axios');
require('dotenv').config()
const API = process.env.API

const dataModel = {
    getData: () => new Promise(async(resolve, reject) => {
        try {
            const response = await axios.get(API)
            resolve(response.data)
        } catch (err) {
            reject(err)
        }   
    }),
}

module.exports = dataModel;