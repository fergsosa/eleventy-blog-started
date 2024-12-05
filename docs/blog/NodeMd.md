---
layout: layout-post.njk
title: Node.js
img: /img/Node.svg
description: Ideas principales de Node.js
tags: ["blog", "lengaujes"]
date: "2023-02-02"
---

# {{title}}

![{{title}}]({{img}})

_&nbsp; Es un entorno de ejecución de JavaScript en el lado del servidor que permite a los desarrolladores crear aplicaciones web y de red altamente escalables y eficientes. Aquí tienes algunos conceptos básicos_

## conceptos importantes

- ### Modelo cliente / servidor

  - solicitudes

- ### Patrón de software

  - MVC (modelo vista controlador)

- ### API REST

  - CRUD: GET / POST / PUT / DELETE

# Controlar versiones de Node

- `nvm` 👉 controlador de version de Node.js
- `nvm install <v nroVersion>` 👉 instala la version elegida
- `nvm list `👉 muestra la versiones instaladas
- `nvm use <v nroVersion> `👉 activa la version elegida
- `nvm uninstall <v nroVersion> `👉 instala la version elegida
- `nvm alias default node `👉 usa la ultima version instalada

---

## HTTP

### estados

- **100:** informativa
- **200:** correctas
- **300:** redirecciones
- **400:** cliente
- **500:** servidor

---

### 🔻**Entorno de Ejecución**

### _Ejecución de JavaScript en servidor._

**_Node.js_** proporciona un entorno de tiempo de ejecución para JavaScript fuera del navegador, lo que significa que puedes ejecutar JavaScript en el servidor.

---

### 🔻**Event-Driven y Non-Blocking I/O**

### _Programación orientada a eventos, E/S no bloqueante._

Node.js utiliza un modelo de programación orientado a eventos y operaciones de entrada/salida no bloqueante, lo que permite manejar múltiples solicitudes simultáneamente sin bloquear el hilo de ejecución.

---

### 🔻**Módulos**

### _División de la aplicación en módulos reutilizables._

Node.js utiliza un sistema de módulos que permite la modularidad en el código. Puedes dividir tu aplicación en archivos pequeños y reutilizables, y luego importarlos según sea necesario en otros archivos.

---

### 🔻**npm: Node Package Manager**

### _Gestión de paquetes y dependencias con npm._

Es el sistema de gestión de paquetes de Node.js que te permite instalar, compartir y gestionar dependencias de proyectos fácilmente. npm es una de las mayores colecciones de paquetes de código abierto del mundo.

---

### 🔻**API de E/S Asíncrona**

### _Operaciones de entrada/salida asíncronas._

Node.js proporciona una amplia gama de APIs para realizar operaciones de entrada/salida de manera asíncrona, lo que significa que las operaciones pueden continuar mientras otras operaciones están en curso, sin bloquear el hilo de ejecución.

---

### 🔻**Single-Threaded pero Event-Loop**

### _Modelo de event-loop para concurrencia eficiente._

Node.js opera en un solo hilo, pero utiliza un modelo de event-loop que permite manejar múltiples solicitudes simultáneamente. Esto hace que sea eficiente para aplicaciones de red en tiempo real.

---

### 🔻**Escalabilidad**

### _Altamente escalable para aplicaciones de red._

Gracias a su modelo de E/S no bloqueante y su capacidad para manejar muchas conexiones simultáneas, Node.js es altamente escalable y adecuado para aplicaciones que requieren un alto rendimiento y concurrencia.

---

### 🔻**Desarrollo de API y Aplicaciones Web**

### _Desarrollo de APIs, servidores web, aplicaciones en tiempo real._

Node.js es comúnmente utilizado para desarrollar APIs RESTful, servidores web y aplicaciones de una sola página (SPA), así como aplicaciones en tiempo real como chat en línea, juegos multijugador y aplicaciones de transmisión de datos.

---

### 🔻**Frameworks y Bibliotecas**

### _Utilización de frameworks y bibliotecas populares._

Existen muchos frameworks y bibliotecas populares construidos sobre Node.js, como Express.js, Socket.io, Hapi.js, Koa.js, entre otros, que simplifican el desarrollo web y la creación de APIs.

---

### 🔻**Streaming de Datos**

### _Eficiente para streaming de datos en tiempo real._

Node.js es excelente para el manejo de datos en tiempo real, como el streaming de archivos o la transmisión de video, debido a su capacidad para manejar la E/S de manera eficiente.

---

### 🔻**Middleware**

### _Funciones que manejan solicitudes HTTP intermedias._

Son funciones intermedias que se ejecutan entre la recepción de una solicitud HTTP y el envío de una respuesta. En el contexto de Node.js y frameworks como Express.js, los middlewares pueden realizar tareas como el análisis del cuerpo de la solicitud, la autenticación, la gestión de sesiones, el registro de solicitudes, entre otros.

---

### 🔻**Callback**

### _Funciones pasadas como argumentos a otras funciones._

En JavaScript, un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal ha terminado de ejecutarse. Son comunes en Node.js para manejar operaciones asíncronas como lectura de archivos, solicitudes de red o consultas a bases de datos.

---

### 🔻**Promesa**

### _Manejo asincrónico de operaciones, evita "callback hell"._

on objetos que representan el éxito o el fracaso eventual de una operación asíncrona y su valor resultante. Las promesas en Node.js proporcionan una forma más limpia y estructurada de manejar operaciones asincrónicas, evitando el "callback hell" y permitiendo un mejor manejo de errores.

---

### 🔻**Async/Await**

### _Sintaxis para trabajar con promesas de manera síncrona._

Es una sintaxis de JavaScript para trabajar con promesas de manera síncrona, haciéndolas parecer más como código síncrono. Las funciones marcadas con async devuelven automáticamente una promesa y la palabra clave await pausa la ejecución de la función hasta que la promesa se resuelve o se rechaza.

---

### 🔻**EventEmitted**

### _Clase para emitir y escuchar eventos._

Es una clase en Node.js que permite la implementación de un patrón de diseño de publicación/suscripción para la gestión de eventos. Los objetos EventEmitter pueden emitir eventos y los oyentes pueden suscribirse a esos eventos para ejecutar código específico cuando se emiten.

---

### 🔻**Buffed**

### _Almacén temporal de datos binarios en memoria._

Es un área de memoria que se utiliza para almacenar datos binarios de longitud fija. Los buffers son comúnmente utilizados en Node.js para trabajar con datos binarios como archivos, imágenes o datos de red.

---

### 🔻**Stream**

### _Flujo de datos que se procesa incrementalmente._

Es una abstracción en Node.js para leer o escribir datos de manera secuencial. Los streams permiten procesar grandes volúmenes de datos de manera eficiente, ya que no es necesario cargar todo el contenido en memoria de una vez.

---

### 🔻**Cluste**

### _Módulo para crear procesos hijos en paralelo._

El módulo Cluster en Node.js permite crear múltiples procesos hijos que comparten el mismo puerto del servidor. Esto mejora el rendimiento y la escalabilidad al permitir que un servidor Node.js utilice todos los núcleos de la CPU de manera eficiente.

---

### 🔻**N-AP**

### _Interfaz de aplicación nativa para extensiones C++._

Es una interfaz de aplicación nativa en Node.js que proporciona una forma estable de escribir extensiones en C++ que sean compatibles con múltiples versiones de Node.js. Esto facilita la creación de módulos nativos para Node.js que no dependen de la versión específica de Node.js.

---

### 🔻**Debugged**

### _Herramientas para depurar código Node.js._

Debugger: Node.js ofrece herramientas integradas de depuración que permiten inspeccionar el estado de ejecución de una aplicación, establecer puntos de interrupción, rastrear variables y ejecutar el código paso a paso para identificar y corregir errores.

## COMANDOS

```
`node nomArch`
```

- Ejecuta archivos JavaScript con Node.js.

```
`node -V`
```

- Muestra la versión actual de Node.js instalada.

```
`node --inspect nomArch`
```

- Inicia la depuración de un archivo JavaScript.

```
`node .<comando> `👉 es la consola en Node.js
```

- /.break/.clear/.editor/.exit/.help/.load/.sav

## Comandos de NPM (Node Package Manager)

```
`npm init`
```

- Crea un nuevo archivo package.json interactivo en el directorio actual.

```
`npm i/install`
```

- Instala todas las dependencias listadas en package.json.

```
`npm i/install <package>`
```

- Instala un paquete específico y lo añade a package.json como DEPENDENCIA.

```
`npm i/install <package> --save-dev`
```

- Instala un paquete específico y lo añade a package.json como dev-dependencies.

```
`npm un/uninstall <package>`
```

- Desinstala un paquete específico y lo elimina de package.json.

```
`npm run <script>`
```

- Ejecuta un script definido en la sección scripts de package.json.

```
`npm ls/list`
```

- Muestra una lista de todos los paquetes instalados y sus dependencias.

```
`npm outdate`
```

- Muestra una lista de paquetes desactualizado.

```
`npm update <package>`
```

- Actualiza todos los paquetes a sus versiones más recientes según las restricciones en package.json.

- Se tiene que actualizar manualmente las DEPENDENCIA en el package.json

```
`npm cache clean --forc`
```

- Limpia la caché de npm.

## Paquete server

```
`npm -i --g serve`
```

- serve 👉 es como live-server para Node.js

  ? Ejecuta comandos npm sin necesidad de instalarlos globalmente.

## Comandos de NPX

```
`npx <command>`
```

- Ejecuta comandos npm sin necesidad de instalarlos globalmente.

## 🔻11ty/eleventy

```bash
 npx @11ty/eleventy
 npx run build
    "build": "npx @11ty/eleventy",
 npx start
    "start": "npx @11ty/eleventy --serve"
```

## Comandos de Control de Versiones

- nvm (Node Version Manager):
- Gestiona diferentes versiones de Node.js.
  - nvm install 14.17.0 para instalar la versión 14.17.0 de Node.js.
  - nvm use 14.17.0 para usar la versión 14.17.0 de Node.js.

## frameworks Exprexx

**Express** es uno de los frameworks más populares para construir aplicaciones web con Node.js.

**Métodos:** Routing / Middleware / Aplicación / Respuesta

## Métodos de Routing

Estos métodos se utilizan para definir las rutas y manejar las solicitudes HTTP.

🔻`app.get(path, callback)`

Maneja solicitudes HTTP **GET**. Se usa para _**OBTENER**_ datos del servidor.

```js
app.get("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud GET");
});
```

🔻`app.post(path, callback)`

Maneja solicitudes HTTP **POST**. Se usa para _**ENVIAR**_ datos al servidor.

```js
app.post("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud POST");
});
```

🔻`app.put(path, callback)`

Maneja solicitudes HTTP **PUT**. Se usa para _**ACTUALIZAR**_ datos en el servidor.

```js
app.put("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud PUT");
});
```

🔻`app.delete(path, callback)`

Maneja solicitudes HTTP **DELETE**. Se usa para _**ELIMINAR**_ datos del servidor.

```js
app.delete("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud DELETE");
});
```

🔻`app.patch(path, callback)`

Maneja solicitudes HTTP **PATCH**. Se usa para _**realizar**_ ACTUALIZACIONES \* PARCIALES de los datos.

```js
app.patch("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud PATCH");
});
```

🔻`app.all(path, callback)`

Maneja todas las **solicitudes** HTTP para UNA ruta _**específica**_.

```js
app.all("/ruta", (req, res) => {
  res.send("Respuesta a cualquier tipo de solicitud HTTP");
});
```

## Métodos de Middleware

Estos métodos se usan para ejecutar código antes de llegar a la ruta específica.

- `app.use`:
  es extremadamente útil para organizar y modularizar la lógica de la aplicación, permitiendo añadir funcionalidades comunes de manera eficiente y estructurada.
- 🔻`app.use(path, middleware)`:
  Aplica middleware a todas las rutas que coinciden con el path especificado.

```js
app.use("/ruta", (req, res, next) => {
  console.log("Middleware ejecutado");
  next();
});
```

- 🔻`app.use(middleware)`:
  Aplica middleware a todas las rutas de la aplicación.

```js
app.use((req, res, next) => {
  console.log("Middleware ejecutado para todas las rutas");
  next();
});
```

## Métodos de Aplicación

Estos métodos se usan para configurar y manejar la aplicación.

- 🔻`app.listen(port, callback)`:
  Inicia el servidor en el puerto especificado.

```js
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
```

- 🔻`app.set(name, value)`:
  Establece una variable de configuración.

```js
app.set("view engine", "ejs");
```

- 🔻`app.get(name)`:
  Obtiene una variable de configuración.

```js
const engine = app.get("view engine");
```

## Métodos de Respuesta

Estos métodos se usan para enviar respuestas al cliente.

🔻`res.send(data)`

Envía una respuesta de varios tipos al cliente.

```js
res.send("Hola, mundo");
```

🔻`res.json(data)?`

Envía una respuesta en formato JSON.

```js
res.json({ mensaje: "Hola, mundo" });
```

🔻`res.status(code)`

Establece el código de estado HTTP para la respuesta.

```js
res.status(404).send("No encontrado");
```

🔻`res.redirect(url)`

Redirige la solicitud a una URL diferente.

```js
res.redirect("/nueva-ruta");
```

🔻`res.render(view, data)`

Renderiza una vista utilizando el motor de plantillas configurado.

```js
res.render("index", { titulo: "Página de Inicio" });
```

> Estos métodos son fundamentales para trabajar con Express y permiten manejar y responder a las solicitudes HTTP de manera efectiva.

  <!--
-->
