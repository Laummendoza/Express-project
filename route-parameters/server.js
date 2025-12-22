const express = require('express');

const friendsController = require("./controllers/friendsController");
const messagesController = require("./controllers/messagesController");

const app = express();

const PORT = 3000;



// Middleware que registra la hora de cada solicitud. No la muestra en browser ya que si lo hiciera no continuaria a otra ruta ( res.send() corta el flujo).
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});


// Middleware para parsear JSON en el body de las solicitudes
app.use(express.json());


//requests
app.post("/newFriend", friendsController.postNewFriend);
app.get('/friends', friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriendById);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessages);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

