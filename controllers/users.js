let usersLogic = require('../logic/users-logic');
const express = require("express");
const router = express.Router();

router.post('/', async (req, res, next) =>{

let userDetails = req.body;

try{

    let successfullLoginRespone = await usersLogic.login(userDetails);
    return res.json(successfullLoginRespone);

}catch(e){
    return next(e);
}

});

module.exports = router;