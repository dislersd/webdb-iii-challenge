const express = require('express');
const server = express();
const cohortRouter = require('./routers/cohorts-router.js')

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello')
});

module.exports = server;