https://hub.docker.com/u/jesusnu

# Proyecto de Adopciones

Este proyecto permite gestionar adopciones de mascotas. A continuación se describen las principales funcionalidades y cómo ejecutar la aplicación.

## Características

- **Mocking de datos**: Se incluye un módulo para generar datos ficticios de usuarios.

- **Dockerización**: El proyecto puede ejecutarse en un contenedor Docker.

## Requisitos

- Node.js v16 o superior.
- Docker (opcional, para ejecutar el contenedor).

## Instrucciones

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

### Ejecución Local
1. Crear un archivo `.env` con las variables necesarias.
2. Ejecutar la aplicación:
   ```bash
   npm start
   ```
3. Acceder a `http://localhost:8080` en tu navegador.

### Dockerización
1. Construir la imagen de Docker:
   ```bash
   docker build -t adopciones .
   ```

2. Ejecutar el contenedor:
   ```bash
   docker run -p 8080:8080 adopciones
   ```
3. Acceder a `http://localhost:8080` en tu navegador.

## Pruebas
Para ejecutar las pruebas funcionales:
```bash
npm test
```
