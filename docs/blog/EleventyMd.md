---
layout: layout-post.njk
title: Eleventy
img: /img/eleventy.svg
description: Ideas principales de Eleventy
tags: ["blog", "lengaujes"]
bgColor: "cyan"
date: "2023-02-22"
---

# {{title}}

![img]({{img}})

## Temas {#temas}

<!-- [🔼 Regresar](#temas) -->

- [Comandos/Pasos](#comandos-Pasos)
- [Pasos para comenzar un proyecto](#pasos-para-comenzar-un-proyecto)
- [Atajos de _package.json_](#atajos-de-package-json)
- [Instrucciones](#instrucciones)

[🔼 Regresar](#temas)

## Comandos/Pasos {#Comandos-Pasos}

### Trae dependencias

1.  `echo '# Page header' > index.md`: crear un archivos Markdown _"index.md"_
1.  `npx @11ty/eleventy`: trae las dependencias
1.  `npx @11ty/eleventy --serve`: servidor

[🔼 Regresar](#temas)

## Pasos para comenzar un proyecto {#pasos-para-comenzar-un-proyecto}

1.  `npm init -y`: instala package.json de NodeJs.
1.  `npm install @11ty/eleventy --save-dev`: dependencias.
1.  `npx @11ty/eleventy --serve`: crea servidor (como live server).
1.  `npm run clean`: borrar antes de desplegar/subir a producción.

[🔼 Regresar](#temas)

## Atajos de _package json_ {#atajos-de-package-json}

```json
"scripts": {
    "install": "npm install @11ty/eleventy --save-dev",
    "start": "npx @11ty/eleventy --serve --port=7777",
    "clean": "rm -rf docs",
    "deploy": "npx @11ty/eleventy --pathprefix=/",
    "deploy-subdomain": "npx @11ty/eleventy --pathprefix=/SUB-DIRECTORY/"
  },
```

# Estructura de Carpetas

- 📂 code
  - 🔻 Carpetas de origen de _@11ty_
  - 📁 \_data _( poder guardar datos tipo json )_
  - 📁 \_includes _( Estructura de página )_
  - 🔻 Carpetas adicionales
  - 📁 css
  - 📁 img
  - 📁 js

Para contenido de páginas uso **Nunjucks/YAML**

Para todos artículos de blog uso **Markdown**

---

# **Subir proyectos a GitHub Pages**

### _Starter Project_ _11ty_ + _GitHub Pages_.

[🔼 Regresar](#temas)

## Instrucciones {#instrucciones}

1. Clona este repositorio.
   ```bash
   git clone https://github.com/jonmircha/starter-project-eleventy-github-pages.git
   ```
1. Instala las dependencias.
   ```bash
   npm install
   ```
1. Iniciar el ambiente de desarrollo.
   ```bash
   npm start
   ```
1. Comienza a crear el contenido de tu sitio.
1. Cuando termines recuerda modificar en el _**package.json**_ el contenido del comando _**deploy-subdomain**_, reemplazando el texto:
   ```bash
   --pathprefix=/subdirectory/
   ```
   por
   ```bash
   --pathprefix=/el-nombre-de-tu-repositorio/
   ```
1. Limpia la carpeta docs y ejecuta tu despliegue:
   ```bash
   npm run clean
   npm run deploy-subdomain
   ```
1. Crea un repositorio en tu cuenta de _GitHub_.
1. Vincula tu carpeta con tu repositorio.
1. Sube el contenido a _GitHub_.
1. Configura el Servicio de _GitHub Pages_.
1. Feliz despliegue 🥳 🦡🎈.

[Aquí](https://jonmircha.github.io/starter-project-eleventy-github-pages/) puedes ver la demo de este _starter project_.

También puedes ver mi Curso de _11ty_ en _YouTube_, da clic a la siguiente imagen. 👇🏻

[![Curso Eleventy](code/img/curso-youtube.png)](https://www.youtube.com/watch?v=yCF9l4_E5rI)

---

### 🔻Generador de Sitios Estáticos:

- Sitios web sin contenido dinámico.
- Eleventy es un generador de sitios estáticos, lo que significa que toma contenido y plantillas y los combina para producir archivos HTML, CSS y JavaScript estáticos que forman un sitio web completo.

### 🔻Plantillas:

- Estructuras para la generación de contenido.
- Eleventy admite varias opciones de plantillas, incluyendo HTML simple, Markdown, Nunjucks, Liquid, Handlebars y más. Estas plantillas son archivos que contienen código que se utilizará para generar las páginas del sitio.

### 🔻Datos:

- Información utilizada en la construcción del sitio.
- Eleventy permite la incorporación de datos en las plantillas desde una variedad de fuentes, como archivos JSON, YAML o JavaScript, así como desde APIs externas o bases de datos.

### 🔻Colecciones:

- Agrupaciones de contenido relacionado.
- Eleventy permite organizar el contenido en colecciones, que son conjuntos de datos relacionados. Por ejemplo, puedes tener una colección para tus publicaciones de blog y otra para tus páginas de proyectos.

### 🔻Configuración:

- Ajustes personalizables del funcionamiento de Eleventy.
- Eleventy es altamente configurable a través de su archivo de configuración .eleventy.js. Aquí puedes especificar opciones como directorios de entrada y salida, formatos de plantillas admitidos, y más.

### 🔻Comandos de línea de comandos (CLI):

- Interfaz de línea de comandos para Eleventy.
- Eleventy incluye una interfaz de línea de comandos que te permite ejecutar diferentes tareas, como construir el sitio, servirlo localmente para desarrollo, y más.

### 🔻Extensiones y complementos:

- Adiciones para ampliar la funcionalidad de Eleventy.
- Eleventy es extensible mediante el uso de complementos y extensiones que pueden agregar funcionalidades adicionales, como soporte para Sass, minificación de archivos, optimización de imágenes, entre otras cosas.

[🔼 Regresar](#temas)
