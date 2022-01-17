const express = require('express');
const appServer = express();
const path = require('path');

const admin_router = require('./Router/adminRout');
const shop_router = require('./Router/shopRout');
appServer.use(express.urlencoded());
appServer.set('view engine', 'ejs');
appServer.set('views', 'Views');

appServer.use(express.static(path.join(__dirname, 'Public')))

appServer.use(admin_router);
appServer.use(shop_router);
appServer.listen(1021, () => {
    console.log("server is connected at localhost:1021");
})