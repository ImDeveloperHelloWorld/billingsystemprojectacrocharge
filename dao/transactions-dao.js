let connection = require("./connection-wrapper");
let ErrorType = require("./../errors/error-type");
let ServerError = require("./../errors/server-error")

async function addTransaction(transaction) {

    try {
        let sql = "INSERT INTO transactions (total_price, currency, credit_card_type, credit_card_number, customer_id)  values(?, ?, ?, ?, ?)";
        let parameters = [
            transaction.totalPrice,
            transaction.currency,
            transaction.creditCardType,
            transaction.creditCardNumber,
            transaction.customerId
        ];

        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function getAllTransactions() {

    let sql = "SELECT id,\
    currency,\
    total_price AS totalPrice,\
    credit_card_type AS creditCardType,\
    credit_card_number AS creditCardNumber,\
    customer_id AS customerId\
    FROM transactions";
    try {
        return await connection.execute(sql);
    }
    catch (e) {
        throw new ServerError(ErrorType.PARAMETERS_ERROR, sql, e);
    }
}

async function updateTransaction(transactionUpdateDetails) {

    let sql = "UPDATE transactions SET total_price=?, currency=?, credit_card_type=?, credit_card_number=? WHERE id=?";    
    let parameters = [
        transactionUpdateDetails.totalPrice,
        transactionUpdateDetails.currency,
        transactionUpdateDetails.creditCardType,
        transactionUpdateDetails.creditCardNumber,
        transactionUpdateDetails.id
    ];
    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function deleteTransaction(transactionId){

    try {

        let sql = "DELETE FROM transactions WHERE id=?";
        let parameters = [transactionId];
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }

}

module.exports = {
    addTransaction,
    getAllTransactions,
    updateTransaction,
    deleteTransaction
};