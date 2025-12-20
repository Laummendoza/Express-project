const express = require('express');

const app = express();

const PORT = 3000;

const friends = [{
    id: 0,
    name: 'Pedro'
}, {
    id: 1,
    name: 'Juan'
},
{
    id: 2,
    name: 'Diego'
}];

// Middleware que registra la hora de cada solicitud. No la muestra en browser ya que si lo hiciera no continuaria a otra ruta ( res.send() corta el flujo).
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

app.get('/friends', (req, res) => {
    res.status(200).json(friends); // Devuelve la lista completa de amigos como Json 
});

app.get("/friends/:friendId", (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.json(friend);
    }

    else {
        res.status(404).json({ error: "Friend not found" });
    }

});



app.get("messages", (req, res) => {
    res.send("<h1>Messages</h1>");
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

