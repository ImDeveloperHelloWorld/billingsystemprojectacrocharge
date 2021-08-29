const express = require('express');
const path = require('path');
const customersController = require("./controllers/customers");
const transactionsController = require("./controllers/transactions");
const usersController = require('./controllers/users');
const errorHandler = require("./errors/error-handler");
const cors = require('cors')
const errorHandlerTwo = require('./middleware/error-handler');
const loginFilter = require('./middleware/login-filter');
require('./reactServer');

const server = express();
server.use(express.json());

server.use(cors());

// Middlewares init
server.use(loginFilter());
server.use(errorHandlerTwo);

server.use("/customers", customersController);
server.use("/transactions", transactionsController);
server.use("/users", usersController);

server.use(errorHandler);

server.listen(3001, () =>{console.log("Listening on port 3001");});