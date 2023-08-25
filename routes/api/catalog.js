const express = require("express");
const { catalog } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const { get, getCatalogById } = catalog;
const router = express.Router();

router.get("/", ctrlWrapper(get));
router.get("/:id/", ctrlWrapper(getCatalogById));

module.exports = routerCatalog = router;
