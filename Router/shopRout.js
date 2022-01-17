const express = require('express');
const shop_router = express.Router();
const shopController = require('../Controller/shopController');


shop_router.get('/shpDetails', shopController.getproductDetailst);


module.exports = shop_router;