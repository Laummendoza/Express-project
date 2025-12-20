# Friends API – Express Practice

Mini proyecto desarrollado con Node.js y Express como práctica de backend.

El objetivo es aplicar el  manejo de parámetros con responses en formato JSON y estructura de un servidor Express.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript (CommonJS)

## Funcionalidades

- Ruta GET para obtener la lista de amigos
- Ruta GET con parámetro dinámico para obtener un amigo por ID
- Manejo de errores simples cuando el recurso no existe

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
- GET /friends

Devuelve la lista completa de amigos.

- GET /friends/:friendId

Devuelve un amigo específico según su ID.

## Notas

Los datos se almacenan en memoria.

Proyecto con fines educativos.

No utiliza base de datos.

## Autora

Laura Mendoza
