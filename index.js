'use strict';

const config = require('./src/config');
const app = require('./src');

const server = app.listen(config.port);

module.exports = server;
