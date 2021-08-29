let connection = require("./connection-wrapper");
let ErrorType = require("./../errors/error-type");
let ServerError = require("./../errors/server-error")

async function addCustomer(customer) {

    try {
        let sql = "INSERT INTO customers (first_name, last_name, email, gender, country, city, street, phone)  values(?, ?, ?, ?, ?, ?, ?, ?)";
        let parameters = [
            customer.firstName,
            customer.lastName,
            customer.email,
            customer.gender,
            customer.country,
            customer.city,
            customer.street,
            customer.phone
        ];
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function getAllCustomers() {

    let sql = "SELECT c.id, c.first_name as firstName, c.last_name as lastName, c.email, c.gender, c.country, c.city, c.street, c.phone, COUNT(t.id) as totalTransactions\
    FROM customers c\
    LEFT JOIN transactions t \
    ON c.id = t.customer_id \
    GROUP BY c.id"
    ;

    try {
        return await connection.execute(sql);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function updateCustomer(customerUpdateDetails) {

    let sql = "UPDATE customers SET first_name=?, last_name=?, email=?, gender=?, country=?, city=?, street=?, phone=?  WHERE id=?";    
    let parameters = [
        customerUpdateDetails.firstName,
        customerUpdateDetails.lastName,
        customerUpdateDetails.email,
        customerUpdateDetails.gender,
        customerUpdateDetails.country,
        customerUpdateDetails.city,
        customerUpdateDetails.street,
        customerUpdateDetails.phone,
        customerUpdateDetails.id
    ];

    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function deleteCustomer(customerId){

    try {

        let sql = "DELETE FROM customers WHERE id=?";
        let parameters = [customerId];
        let temp = await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.RELATEDTRANSACTION);
    }

}

module.exports = {
    addCustomer,
    getAllCustomers,
    updateCustomer,
    deleteCustomer
};