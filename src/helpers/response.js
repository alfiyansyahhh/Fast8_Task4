const response = {
    success: (res, result, msg) =>{
        const success = {
            status : "success",
            result,
            code: 200,
            message: msg
        }
        res.json(success)
    },
    failed : (res, code, err) => {
        if(code === 500){
            const failed = {
                status : "failed",
                data : null,
                errorCode : 500,
                error : err,
                message: 'There was an error on the server and the request could not be completed'
            }
            res.json(failed)
        }
    }
}
module.exports = response