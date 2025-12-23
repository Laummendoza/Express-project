
const express = require("express");

const messagesRouter = express.Router();

const messagesController = require ("../controllers/messagesController");


messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessages);

module.exports = messagesRouter;
