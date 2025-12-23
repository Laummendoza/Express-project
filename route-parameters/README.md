# Friends API – Express Practice

Mini proyecto de **API REST** desarrollado con **Node.js** y **Express**, enfocado en la práctica de conceptos fundamentales de backend como **routing**, **parámetros dinámicos**, **middlewares**, **validación de datos** y **respuestas en formato JSON**.

El proyecto fue creciendo de forma incremental como parte de mi proceso de aprendizaje, incorporando una estructura más modular y cercana a un proyecto real.

##  Tecnologías utilizadas

* Node.js
* Express
* JavaScript (CommonJS)

## Funcionalidades

* Rutas **GET** para obtener la lista de amigos
* Ruta **GET** con parámetro dinámico (`:friendId`) para obtener un amigo por ID
* Ruta **POST** para crear nuevos amigos con validación de datos
* Rutas **GET** y **POST** para gestión de mensajes
* Manejo básico de errores (validación y recursos inexistentes)
* Respuestas en formato **JSON**
* Separación de responsabilidades mediante **routers** y **controllers**
* Middleware de logging (IP y tiempo de respuesta)

##  Estructura del proyecto

```
route-parameters/
├── controllers/
│   └── friendsController.js
├── routes/
│   └── friendsRouter.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/Laummendoza/Express-project.git
```

2. Entrar al directorio del proyecto:

```bash
cd Express-project/route-parameters
```

3. Instalar dependencias:

```bash
npm install
```

4. Iniciar el servidor:

```bash
node server.js
```

El servidor quedará corriendo en:

```
http://localhost:3000
```

## 🔗 Endpoints disponibles

### Friends

* **GET /friends**
  Devuelve la lista completa de amigos.

* **GET /friends/:friendId**
  Devuelve un amigo específico según su ID.

* **POST /friends**
  Crea un nuevo amigo. Requiere el siguiente body en formato JSON:

```json
{
  "name": "Nombre del amigo"
}
```
### Messages

* **GET /messages**
  Devuelve la lista completa de mensajes.

* **POST /messages**
  Crea un nuevo mensaje.



## 📝 Notas

* Los datos se almacenan en memoria (no utiliza base de datos).
* Proyecto con fines educativos y de práctica backend.

## 👩‍💻 Autora

**Laura Mendoza**
