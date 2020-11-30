const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  console.log('/tickets');
  res.send('ticckets root route')
})

module.exports = router;