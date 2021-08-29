let transactionsLogic = require("../logic/transactions-logic");
const express = require("express");
const router = express.Router();

router.post("/", async (request, response, next) => {

    let transaction = request.body;

    try {

        await transactionsLogic.addTransaction(transaction);
        response.json("The Transaction Was Successfully Added!");

    } catch (error) {

        return next(error);
    }
});

router.get("/", async (request, response, next) => {

    try {

        let allTransactions = await transactionsLogic.getAllTransactions();
        response.json(allTransactions);

    } catch (error) {

        return next(error);
    }
});

router.put("/", async (request, response, next) => {

    let transactionUpdateDetails = request.body;

    try {

        await transactionsLogic.updateTransaction(transactionUpdateDetails);
        response.json("The Transaction Successfully Updated");

    } catch (error) {

        //console.log(error);
        return next(error);

    }
});

router.delete("/:id", async (request, response, next) => {

    let transactionId = request.params.id;

    try {

        let deletedTransaction = await transactionsLogic.deleteTransaction(transactionId);
        response.send("The transaction was successfully removed");

    } catch (error) {

        //console.log(error);
        return next(error);

    }
});

module.exports = router;