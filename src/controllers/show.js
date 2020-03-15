'use strict';

const orders = require('../../orders.json');

function showOrders() {
  return orders;
}

module.exports = {
  showOrders
};
