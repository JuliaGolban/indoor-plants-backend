const express = require("express");
const { event } = require("../../controllers");
const { ctrlWrapper } = require("../../middleWares");

const {
  update
} = event;

const router = express.Router();

router.post("/", ctrlWrapper(update));

module.exports = routerUpdateEvent = router;
