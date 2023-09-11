const express = require('express');
const { cities } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');

const { postByFilter } = cities;
const router = express.Router();

// router.get("/", ctrlWrapper(get));
router.post('/', ctrlWrapper(postByFilter));

module.exports = routerSities = router;
