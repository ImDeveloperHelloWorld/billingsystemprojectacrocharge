let transactionsDao = require('../dao/transactions-dao');

async function addTransaction(transaction) {

    await transactionsDao.addTransaction(transaction);

}

async function getAllTransactions() {

let allTransactions = await transactionsDao.getAllTransactions();
return allTransactions;

}

async function updateTransaction(transactionUpdateDetails) {

    await transactionsDao.updateTransaction(transactionUpdateDetails);

}

async function deleteTransaction(transactionId) {

    await transactionsDao.deleteTransaction(transactionId);

}

module.exports = {
    addTransaction,
    getAllTransactions,
    updateTransaction,
    deleteTransaction
};