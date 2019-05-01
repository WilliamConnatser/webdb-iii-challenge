const express = require('express');
const cohortsRouter = require('./cohortsRouter');
const studentsRouter = require('./studentsRouter');

const server = express();

server.use(express.json());
server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);

module.exports = server;