const express = require('express');
const admin_router = express.Router();
const adminController = require('../Controller/adminController');

admin_router.get('/home_form', adminController.getFormDisplay);
admin_router.post('/postValue', adminController.postFormValue);
admin_router.get('/productDetAdmin', adminController.getAdminProduct);


module.exports = admin_router;