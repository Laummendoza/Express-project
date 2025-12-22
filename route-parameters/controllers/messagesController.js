function getMessages (req,res) {
    res.send("<h1>Hola amigos</h1><h2>¿Cómo están?</h2>");
}

function postMessages (req,res) {
    console.log("Mensaje recibido a traves de ruta POST. Actualizando lista de mensajes");
}

module.exports = {
    getMessages,
    postMessages
};
