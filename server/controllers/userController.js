const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  console.log('/users');
  res.send('users root route')
})

module.exports = router;