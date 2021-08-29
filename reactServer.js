const express = require('express');
const path = require('path');
const cors = require('cors')

const server = express();
server.use(express.json());

server.use(cors());

// Have Node serve the files for our built React app
server.use(express.static(path.resolve(__dirname, './client')));

// All other GET requests not handled before will return our React app
server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client', 'index.html'));
  });  

server.listen(3000, () =>{console.log("React Server Listening on port 3000");});