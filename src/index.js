'use strict';

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./router/auth');
const indexRouter = require('./router/main');
const showRouter = require('./router/show');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/show', showRouter);

module.exports = app;
