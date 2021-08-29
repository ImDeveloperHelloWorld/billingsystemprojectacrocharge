let customersDao = require('../dao/customers-dao');

async function addCustomer(customer) {

    await customersDao.addCustomer(customer);

}   

async function getAllCustomers() {
let allCustomers = await customersDao.getAllCustomers();
return allCustomers;

}

async function updateCustomer(customerUpdateDetails) {

    await customersDao.updateCustomer(customerUpdateDetails);

}

async function deleteCustomer(customerId) {

    await customersDao.deleteCustomer(customerId);

}

module.exports = {
    addCustomer,
    getAllCustomers,
    updateCustomer,
    deleteCustomer
};