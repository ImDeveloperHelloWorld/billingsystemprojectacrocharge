const express = require('express');
const path = require('path');
const customersController = require("./controllers/customers");
const transactionsController = require("./controllers/transactions");
const usersController = require('./controllers/users');
const errorHandler = require("./errors/error-handler");
const cors = require('cors')
const errorHandlerTwo = require('./middleware/error-handler');
const loginFilter = require('./middleware/login-filter');

const server = express();
server.use(express.json());

server.use(cors());

// Have Node serve the files for our built React app
server.use(express.static(path.resolve(__dirname, './client')));

// Middlewares init
server.use(loginFilter());
server.use(errorHandlerTwo);

server.use("/customers", customersController);
server.use("/transactions", transactionsController);
server.use("/users", usersController);

// All other GET requests not handled before will return our React app
server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client', 'index.html'));
  });  

server.use(errorHandler);

server.listen(3001, () =>{console.log("Listening on port 3001");});