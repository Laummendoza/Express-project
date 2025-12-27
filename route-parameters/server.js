const express = require('express');
path = require('path');


const friendsRouter = require("./routes/friendsRouter");
const messagesRouter = require("./routes/messagesRouter");

const app = express();
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));
const PORT = process.env.PORT || 3000;


//middleware para medir el tiempo de respuesta
app.use((req,res,next)=>{
const start = Date.now();
next();
const delta = Date.now() - start;
console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/', (req,res)=>{
    res.render('index',{
        title: "My web site",
        caption: "Bienvenidos a mi sitio web con Express y Node.js"
    });
});


app.use("/friends", friendsRouter);
app.use ("/messages", messagesRouter);   

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

