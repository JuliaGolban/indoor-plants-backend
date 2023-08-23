const express = require("express");
const { message } = require("../../controllers");
const { ctrlWrapper } = require("../../middleWares");

const { post } = message;

const router = express.Router();

router.post("/", ctrlWrapper(post));

module.exports = routerMessage = router;
