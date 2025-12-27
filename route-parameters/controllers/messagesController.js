const path = require('path');

function getMessages (req,res) {
    res.sendFile(path.join(__dirname, '..','public','images','friends.jpg'));
    
}

function postMessages (req,res) {
    console.log("Mensaje recibido a traves de ruta POST. Actualizando lista de mensajes");
}

module.exports = {
    getMessages,
    postMessages
};
