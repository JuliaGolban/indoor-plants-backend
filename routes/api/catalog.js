const express = require('express');
const { catalog } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');

const { get, getByFilter, getCatalogById } = catalog;
const router = express.Router();

// router.get("/", ctrlWrapper(get));
router.get('/', ctrlWrapper(getByFilter));
router.get('/:id/', ctrlWrapper(getCatalogById));

module.exports = routerCatalog = router;
