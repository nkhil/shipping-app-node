'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (_, res, next) => {
  res.status(200).redirect('/home.html');
  next();
});

module.exports = router;
