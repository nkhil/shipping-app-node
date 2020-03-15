'use strict';

const express = require('express');

const router = express.Router();

router.post('/auth', (_, res, next) => {
  res.status(200).json({ message: 'OK' });
  next();
});

module.exports = router;
