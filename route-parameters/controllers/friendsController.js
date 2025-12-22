// importa el modelo de datos
const model = require('../models/friendsModel');

//funciones que se ejecutaran al invocar las rutas
function postNewFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({ error: "Name is required" });
    }
    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend);
    res.json(newFriend);
}


function getFriends(req, res) {
    res.status(200).json(model);
}


function getFriendById(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
        res.json(friend);
    }

    else {
        res.status(404).json({ error: "Friend not found" });
    }

}

//exporta las funciones para usarlas en las rutas
module.exports = {
    postNewFriend,
    getFriends,
    getFriendById
};