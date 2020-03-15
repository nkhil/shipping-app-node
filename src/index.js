'use strict';

const express = require('express');
const app = express();

const authRouter = require('./router/auth');

app.use(`/auth`, authRouter);

module.exports = app;
