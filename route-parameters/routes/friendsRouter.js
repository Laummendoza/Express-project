
const express = require("express");

const friendsController = require("../controllers/friendsController");

const friendsRouter = express.Router();

// Middleware global para logging de IP en todas las rutas de friends
friendsRouter.use((req, res, next) => {
    console.log("ip adress:", req.ip);
    next();
});


friendsRouter.post('/', friendsController.postNewFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendById);


module.exports = friendsRouter;