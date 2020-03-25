'use strict';

const express = require('express');
const router = express.Router();

const { validateUser, generateToken } = require('../controllers/auth');
const { expiration } = require('../config');

router.post('/', (req, res, next) => {
  const user = validateUser(req.body);

  if (user) {
    const token = generateToken();
    res.cookie('token', token, {
      expires: new Date(Date.now() + expiration),
      secure: false,
      httpOnly: true,
    });
    res.status(200).redirect('/home.html')
  } else {
    res.status(401).redirect('/login.html')
  }
  
  next();
});

module.exports = router;
