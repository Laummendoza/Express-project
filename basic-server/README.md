# Express Project

Proyecto simple desarrollado con Node.js y Express como parte de mi aprendizaje en backend.

El objetivo es practicar la creación de un servidor básico, el manejo de rutas y el uso de middlewares en Express.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript (CommonJS)

## Funcionalidades

- Ruta GET principal para verificar el funcionamiento del servidor
- Ruta POST para guardar mensajes en memoria
- Ruta GET para obtener los mensajes guardados

## Estructura del proyecto

- server.js
- package.json
- package-lock.json
- .gitignore

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/Laummendoza/Express-project.git
```

2. Entrar al directorio del proyecto:

```bash
cd Express-project
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

## Endpoints disponibles

### GET /

Devuelve un mensaje para verificar que el servidor está activo.

### POST /agregar-mensaje

Permite enviar un mensaje en formato JSON.

Ejemplo de body:

```json
{
  "mensaje": "Hola desde Express"
}
```

### GET /messages

Devuelve la lista de mensajes almacenados en memoria.

## Notas

Los mensajes se almacenan en memoria, por lo que se pierden al reiniciar el servidor.  
Proyecto con fines educativos, sin base de datos.

## Autora

Laura Mendoza