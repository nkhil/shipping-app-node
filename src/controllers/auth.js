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

function __prepareResponse(validUser) {
  if (validUser.length) {
    return validUser;
  }
  return false;
}

function validateUser(body) {
  const { username, password } = body;
  const validUser = users.reduce((acc, user) => {
    if (__usernameAndPasswordMatch(username, password, user)) {
      acc.push(user);
    }
    return acc;
  }, []);
  return __prepareResponse(validUser);
};

module.exports = {
  validateUser,
  generateToken,
};
