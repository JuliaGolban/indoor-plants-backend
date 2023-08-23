const express = require("express");
const { event } = require("../../controllers");
const { ctrlWrapper } = require("../../middleWares");

const { get } = event;

const router = express.Router();

router.post("/", ctrlWrapper(get));

module.exports = routerEvent = router;
