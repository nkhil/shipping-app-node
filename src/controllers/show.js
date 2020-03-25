'use strict';

const moment = require('moment');

const orders = require('../../orders.json');
const products = require('../../products.json');
const customers = require('../../customers.json');

function __formatDate(date) {
  return moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");
}

function __formatTime(time) {
  return moment(time,"H:mm").format("HH:mm:ss");
}

function __calculateShippingTarget(shippingDate, shippingTime) {
  const date = __formatDate(shippingDate);
  const time = __formatTime(shippingTime);
  const dateTime = `${date}T${time}`;
  return new Date(dateTime).getTime();
}

function __getShippingAddress(customers, buyer) {
  const { address } = customers.find(customer => {
    return customer.name === buyer;
  });
  return address;
}

function __getProductId(products, item) {
  const { productId } = products.find(product => {
    return product.name === item.item
  });
  return productId;
}

function __formatOrders(order) {
  const { items, buyer, shippingDate, shippingTime } = order;
  return items.map(item => {
    const productId = __getProductId(products, item);
    const shippingAddress = __getShippingAddress(customers, buyer);
    const shippingTarget = __calculateShippingTarget(shippingDate, shippingTime);
    const itemDetails = { 
      ...item, 
      productId, 
      shippingAddress,
      shippingTarget,
     };
    return itemDetails;
  });
}

function showOrders() {
  return orders.reduce((acc, order) => {
    const result = __formatOrders(order);
    acc.push(...result);
    return acc;
  }, []);
}

module.exports = {
  showOrders
};
