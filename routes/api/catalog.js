const express = require("express");
const { catalog } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(catalog));

module.exports = routerCatalog = router;
