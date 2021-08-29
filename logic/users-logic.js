let usersDao = require('../dao/users-dao');
const jwt = require('jsonwebtoken');
const config = require('../config.json');

async function login(userDetails) {

    let usersLoginResult = await usersDao.login(userDetails);
    const token = generateAccessToken(usersLoginResult);
    usersLoginResult.token = token;
    return usersLoginResult;

}   

function generateAccessToken(user){

return jwt.sign({ sub: user }, config.secret, {expiresIn: '20m'});

}


module.exports = {
    login
}