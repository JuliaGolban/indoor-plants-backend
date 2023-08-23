const express = require('express');
const { services } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');

const router = express.Router();

router.get('/', ctrlWrapper(services.getServices));

module.exports = routerServices = router;
