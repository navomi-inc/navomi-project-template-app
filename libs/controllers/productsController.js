const express = require('express');

const router = express.Router();

router.get('/products', (req, res) => {
  res.send('products');
});

router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.send(`products ${id}`);
});

module.exports = router;
