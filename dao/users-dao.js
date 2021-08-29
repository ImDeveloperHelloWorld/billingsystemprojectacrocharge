let connection = require("./connection-wrapper");
let ErrorType = require("./../errors/error-type");
let ServerError = require("./../errors/server-error")

async function login(userDetails) {

    try {
        let sql = "SELECT user_name FROM users WHERE user_name=? AND password=?";
        let parameters = [
            userDetails.userName,
            userDetails.password
        ];

        let usersLoginResult = await connection.executeWithParameters(sql, parameters)
        
        if(usersLoginResult == null || usersLoginResult.length == 0){
            throw new ServerError(ErrorType.PARAMETERS_ERROR);
        }

        return usersLoginResult[0];
    }
    catch (e) {
        throw new ServerError(ErrorType.PARAMETERS_ERROR);
    }
}

module.exports = {
    login
}