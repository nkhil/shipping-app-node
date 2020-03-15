'use strict';

const express = require('express');

const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { showOrders } = require('../controllers/show');

router.get('/', authMiddleware, (_, res, next) => {
  const orders = showOrders();
  res.status(200).json(orders);
  next();
});

module.exports = router;
