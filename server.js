const express = require('express');
const router = require('./router');

const server = express();

server.use(express.json());
server.use('/api/cohorts', router);

module.exports = server;