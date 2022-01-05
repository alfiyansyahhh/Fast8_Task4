const datamodel = require('../model/index.model')
const { success, failed } = require("../helpers/response");

const dataController = {
    getData: (req, res) => {
        datamodel.getData().then(async(data) => {
            let result = await data.map((e) =>{
                const output = {
                    "name": e.name,
                    "region": e.region,
                    "timezones": e.timezones,
                }
                return output
            })
            success(res, result, 'Get Success');  
        }).catch((err) => {
            failed(res, 404, err);
        });
    },
}

module.exports = dataController;