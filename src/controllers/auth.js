'use strict';

const jwt = require('jsonwebtoken');
const uuid  = require('uuid/v4');
const users = require('../../users.json');
const config = require('config');

function generateToken() {
  return jwt.sign({ 
    _id: uuid(), 
    isLoggedIn: true
  }, config.get('myprivatekey')); 
}

function __usernameAndPasswordMatch(username, password, user) {
  return user.username === username && user.password === password;
}

function __createResponse(username, password, users) {
  return users.find(user => {
    return __usernameAndPasswordMatch(username, password, user)
  });
}

function validateUser(body) {
  const { username, password } = body;

  if (!username) {
    return false;
  }
  return __createResponse(username, password, users);
}

module.exports = {
  validateUser,
  generateToken,
};
