const express = require('express');
const helmet = require('helmet');

// const NameRouter = require('./data/router/name-router.js');
// creates an express application using the express module

//const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');
// const setupGlobalMiddleware = require('./setup-middleware.js');


const server = express();

// setupGlobalMiddleware(server);


server.use(helmet());
server.use(express.json());

// server.use('/api/data/router', NameRouter);
// server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.send('<h3>Welcome to the Home Page</h3>');
});

module.exports = server;