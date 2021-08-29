let customerLogic = require("../logic/customers-logic");
const express = require("express");
const router = express.Router();

router.post("/", async (request, response, next) => {

    let customer = request.body;

    try {

        await customerLogic.addCustomer(customer);
        response.json("The Customer Was Successfully Added!");

    } catch (error) {

        return next(error);
    }
});

router.get("/", async (request, response, next) => {

    try {

        let allCustomers = await customerLogic.getAllCustomers();
        response.json(allCustomers);

    } catch (error) {

        return next(error);
    }
});

router.put("/", async (request, response, next) => {

    let customerUpdateDetails = request.body;
    try {

        await customerLogic.updateCustomer(customerUpdateDetails);
        response.json("The Customer WERE Updated");

    } catch (error) {

        //console.log(error);
        return next(error);

    }
});

router.delete("/:id", async (request, response, next) => {

    let customerId = request.params.id;

    try {

        await customerLogic.deleteCustomer(customerId);
        response.json("The customer was successfully removed");


    } catch (error) {

        //console.log(error);
        return next(error);

    }
});

module.exports = router;