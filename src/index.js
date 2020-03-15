'use strict';

const express = require('express');
const app = express();
const path = require('path');

const authRouter = require('./router/auth');
const indexRouter = require('./router/main');
const showRouter = require('./router/show');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use('/', indexRouter);
app.use(`/auth`, authRouter);
app.use(`/show`, showRouter);

module.exports = app;
