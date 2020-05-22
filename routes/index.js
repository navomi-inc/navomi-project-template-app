const express = require('express');

const router = express.Router();

const productsController = require('../libs/controllers/productsController');

/* GET home page. */
router.get('/', (req, res) => {
  res.send('Hello World from navomi-abc-pay-store-app!!');
});

router.use('/', productsController);

module.exports = router;
