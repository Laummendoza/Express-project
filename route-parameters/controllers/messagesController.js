const path = require('path');

function getMessages (req,res) {
    //res.sendFile(path.join(__dirname, '..','public','images','friends.jpg'));
    res.render('messages', {
        title: "Mensajes para mis amigos",
        friend: 'Pablo',
    });
}

function postMessages (req,res) {
    console.log("Mensaje recibido a traves de ruta POST. Actualizando lista de mensajes");
}

module.exports = {
    getMessages,
    postMessages
};
