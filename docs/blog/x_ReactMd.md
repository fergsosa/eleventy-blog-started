---
layout: layout-post.njk
title: X-React
img: /img/React.svg
description: Ideas principales de React
tags: ["blog", "lengaujes"]
date: "2024-02-05"
---

# {{title}}

![{{title}}]({{img}})

🔻**react** 👉 Componentes ,Props(Propiedades) ,Estado(State)

🔻**Ciclo de vida del componente** 👉 Montaje ,Actualización ,Desmontaje

🔻**JSX (JavaScript XML)** 👉 Sintaxis para escribir componentes.

🔻**Renderizado condicional** 👉 componentes basado en condiciones.

🔻**Manejo de eventos** 👉 onClick.

🔻**Listas y keys:**

🔻**Refs** 👉 acceso a nodos del DOM

🔻**HOC** 👉 Componente de orden superior

🔻**Virtual DOM** 👉 Representación eficiente de la interfaz.

🔻**Context API** 👉 Gestión de estado en React.

🔻**Hooks** 👉 funciones para componentes

- useState, useEffect, useContext, useReducer,
- useImperativeHandle, useLayoutEffect, useDebugValue.
- **memorización** ➡️ useCallback, memo, useMemouseRef.

🔻**React Router** 👉 librería rutas.

- BrowserRouter, Route, Switch, Link, NavLink,
- Redirect, withRouter, useHistory, useLocation, useParams

🔻**Redux** 👉 biblioteca de gestión de estado.

- Store, Reducer, Action, Dispatch, Middleware, Provider,
- connect, mapStateToProps, mapDispatchToProps, combineReducers, createStore

## atajos

```
🔻imr imrs imrse
import React, { useState, useEffect } from 'react';

🔻 usf
const [🔹,🔹set] = useState(🔹);

🔻 sfc
const🔹 = () => {
return ( 🔹 );
}
export default🔹;

🔻uef
useEffect(() => {
🔹
}, []);
```

## consola

`npx create-react-app`👉 crear proyecto "REACT"

`npx create-expo-app`👉 crear proyecto "EXPO"

`npx create-gatsby`👉 crear proyecto "GATSBY" (1.2MG)

`npm install --save-dev parcel`👉 crear proyecto "PARCEL" (4.5MG / sin map 1.9MG)

[PARCEL](https://parceljs.org/getting-started/webapp/)

## Recomendados Ligeros

### ServerSideRendering

`npx create-next-app`👉 crear proyecto _NEXT_ (0.50MG)

`npx create-remix`👉 crear proyecto _REMIX_ (0.25MG)

### ClientSideRendering

`npm create vite@latest` > crear proyecto "VITE" (0.15MG)

`npm create vite@latest react-router-6 --template -react`

[Pagina Vite](https://vitejs.dev/guide/)

`npm i (install)` 👉 instala

`npm run dev || npm start` 👉 Inicia servidor de desarrollo

`npm install react-router-dom` 👉 dependencias

`npm run build` 👉 Compila la aplicación.

`npm test` 👉 Ejecuta pruebas definidas.

`npm run eject` 👉 Expone configuración avanzada.

## Fundamentos

🔻**Elemento en React** 👈 Interfaz virtual representando DOM.

- Unidades más pequeñas en React.
- Definen lo que se ve en la pantalla.

🔻**Diferencias** 👈 Abstracción vs. Instancia reutilizable.

- Los componentes en React están "hechos" de elementos.

🔻**Elementos HTML** 👈 JSX representando estructura HTML.

- Con JSX, puedes crear y usar cualquier elemento HTML.

🔻**Reconocer** 👈 Etiqueta vs. Función personalizada.

- En JSX, los elementos HTML se representan con etiquetas en letras minúsculas.
- Los componentes definidos por el usuario comienzan con una letra mayúscula.

🔻**Atributos** 👈 Propiedades que configuran elementos.

- Puedes agregar atributos a tus elementos en JSk para especificar ciertas características.
- Pero... algunos se escriben de forma distinta si los comparamos con HTML.

## Diferencia de Escritura

<!-- ``` -->

- class 👉 className="" || for 👉 htmlFor=""
- Style 👉 style{camelCase}
- Style especifico 👉 style{ {color:"red"} }
<!-- ``` -->

- **JSX Anidado** 👉 Estructura jerárquica con elementos.
  - Al igual que en HTML, los elementos pueden ser anidados en JSX para formar estructuras más complejas.
- **Renderizar** 👉 Transformar en interfaz visual.

  `<div id="root"🔸> </div>` 👈 HTML (raíz)

```js
  import ReactDOM from "react-dom" ; 👈 Paquete
  const elemento🔹 = <h1>¡Hola, Mundo!</h1>;
  ReactDOM. render(
  elemento🔹,
  document.getE1ementById("root")🔸
  )
```

- `Self-closing tags` 👉 Etiquetas sin cierre explícito.

Elemento que solo posee una etiqueta de apertura ya que no contiene texto u otros elementos.

`<img src="logo.png" alt="Mi imagen" />`

### JavaScript en JSX > {JS}

Puedes escribir cualquier expresión válida de JavaScript entre las llaves y su valor será reemplazado.

```
let nombre = "Gino" ;
 <p>Su nombre es: {nombre.toUpperCase()}</p> variable
 <p>E1 resultado es: {5 * 6}</p> función
```

## COMPONENTES FUNCIONALES

## COMPONENTES DE CLASE

🔻Componente de Clase

- Clase de ES6 (JavaScript moderno) que retorna un elemento JSX.
  todo|> Características
- Deben extender React.Component.
- Deben tener un método render() para
- retornar un elemento de JSX.
- Pueden recibir props si es necesario.

🔻Método

- Función asociada a un componente que puede acceder y usar su estado.

🔻Método render()

- Método que retorna la estructura del componente en JSX.
- Es el único método obligatorio para un componente de clase en React.

🔻Estructura

? COMPONENTE DE CLASE > Método > Estado

```
import React from "react";
class NombreComponente extends React.Component {
  render() {
  return <p>Mi Componente</p>;
};}
```

# Conceptos

🔻**react** 👉 _combina HTML con JS_

- estructura mas fácil de visualizer
- Errores y de advertencias mas útiles

🔻**Componentes** 👉 _Bloques reutilizables de interfaz._

- Son bloques de construcción fundamentales en React.
- Pueden ser funcionales o basados en clases.
- Representan partes de la interfaz de usuario.

🔻**Props (Propiedades)** 👉 _Datos pasados a componentes._

- Son datos que se pasan de un componente padre a un componente hijo.
- Los props son inmutables.

🔻**Estado (State)** 👉 _Datos dinámicos manejados internamente._

- Representa la información interna de un componente.
- Puede cambiar a lo largo del tiempo en respuesta a eventos.

🔻**Ciclo de vida del componente:**

- gestionan el ciclo de vida de un componente.
- Métodos como
- componentDidMount, ( Montaje )
- componentDidUpdate, ( Actualización )
- componentWillUnmount, ( Desmontaje )

🔻**JSX (JavaScript XML)** 👉 _Sintaxis para escribir componentes._

- Sintaxis de extensión de JavaScript utilizada con React para describir la interfaz de usuario.

🔻**Renderizado condicional** 👉 _Mostrar componentes basado en condiciones._

- Permite mostrar diferentes componentes o elementos según una condición.

🔻**Manejo de eventos** 👉 _Interacciones del usuario._

- Se utilizan para gestionar interacciones del usuario, como clics o cambios de entrada.

🔻**Listas y keys:**

- Para representar listas de elementos en React.
- Cada elemento en la lista debe tener una "key" única.

🔻**Levantamiento de estados (Lifting State Up):**

- Patrón en React donde el estado se mueve hacia arriba en la jerarquía de componentes.

🔻**Context API:**

- Proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente a través de cada nivel.

🔻**Hooks** 👉 _Funciones para agregar carac a comp funcionales._

- Introducidos en React 16.8 para permitir el uso de estado y otras características en componentes funcionales.
- Algunos hooks comunes incluyen useState y useEffect.

🔻**React Router:**

- Librería que facilita la navegación en una aplicación React mediante el manejo de rutas.

🔻**Refs:**

- Permiten acceder directamente a los nodos del DOM o a instancias de componentes creados.

🔻**HOC (Higher Order Component):**

- Componente que toma un componente y devuelve un nuevo componente con funcionalidad adicional.

🔻**Virtual DOM** 👉 _Representación eficiente de la interfaz._

- Representación en memoria de la estructura de un DOM.
- React compara el Virtual DOM con el DOM real para determinar los cambios y actualizar eficientemente la interfaz de usuario.

## CONTEXT

context 👉 Estado actual de la aplicación.

## REDUX

```js
npm install --save @redux-devtools/extension
import { devToolsEnhancer } from '@redux-devtools/extension';
devToolsEnhancer()
```

# **Hooks** ⬇️ funciones para componentes

## 🔻useState:

Permite manejar el estado en componentes funcionales.

```js
const [state, setState] = useState(🔸estadoInicial);
estado🔺 🔺actualizador del estado
```

## 🔻useEffect:

Permite hacer uso del ciclo de vida en un componente funcional.

similar a componentDidMount y componentDidUpdate en componentes de clase.

```js
useEffect(() => {
  !console.log("Fase de Montaje");
}, []); 👈 se ejecuta una sola vez
}, [stateDependencia]); 👈 se ejecuta cuando cambia de estado

useEffect(() => {
  !console.log("Fase de Actualizado");
});👈 se ejecuta cuando se redenriza componente 🔄️

useEffect(() => {
  return () => {
    !console.log("Fase de Desmontaje");
  }
});
```

## 🔻useContext:

Permite el consumo de un contexto en componentes funcionales.

```js
const contextValue = useContext(MyContext);
```

## 🔻useReducer:

Alternativa a useState para manejar estados complejos y lógica de actualización en componentes funcionales.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

## MEMORIZACIÓN

## 🔻memorización > usar con cautela

- useCallback 👉 memoriza funciones puras
- memo 👉 memoriza componente completo
- useMemo 👉 memoriza valores calculados

## 🔻useCallback:

Memoriza funciones para evitar que se vuelvan a crear en cada renderización.

```js
const memoizedCallback = useCallback(() => {
  ...
}, [dependencies]);
```

## 🔻useMemo:

Memoriza un valor calculado para evitar su recálculo en cada renderización.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## 🔻useRef:

Crea un objeto mutable que persiste a lo largo de renderizaciones y no provoca una nueva renderización cuando cambia.

```js
const myRef = useRef(initialValue);
```

## 🔻useImperativeHandle:

Personaliza el valor o las funciones expuestas por un useRef.

```js
useImperativeHandle(ref, () => ({
! Funciones expuestas
}), [dependencies]);
```

## 🔻useLayoutEffect:

Similar a useEffect, pero se ejecuta de manera síncrona después de todas las mutaciones del DOM.

```js
useLayoutEffect(() => {
   Efecto sincrónico después de las mutaciones del DOM
}, [dependencies]);
```

## 🔻useDebugValue:

Muestra un valor en las DevTools cuando se inspecciona un gancho personalizado.

```js
useDebugValue(value);
```

# React Router⬇️ Librería

🔻**BrowserRouter** 👉 _Enrutamiento basado en navegador._

- Componente principal que envuelve la aplicación y habilita el enrutamiento basado en el navegador.

🔻**Route** 👉 _Define renderización basada en ruta._

- Define cómo se renderiza un componente en función de la ruta actual.

🔻**Switch** 👉 _Renderiza la primera coincidencia._

- Renderiza el primer <Route> o <Redirect> que coincide con la ubicación actual.

🔻**Link** 👉 _Navegación sin recarga completa._

- Proporciona una forma de navegar entre rutas sin recargar la página completa.

🔻**NavLink** 👉 _Enlaces con estilos activos._

- Similar a Link, pero proporciona estilos adicionales cuando su ruta coincide con la ubicación actual.

🔻**Redirect** 👉 _Redirección automática basada en ruta._

- Redirige automáticamente a otra ruta cuando se renderiza.

🔻**withRouter** 👉 _Conecta componente a ubicación._

- HOC (Higher Order Component) que conecta un componente que no está directamente bajo una ruta a la ubicación del enrutador.

🔻**useHistory** 👉 _Acceso al historial del navegador._

- Hook que proporciona acceso al objeto de historial del navegador, permitiendo la navegación programática.

🔻**useLocation** 👉 _Acceso a la ubicación actual._

- Hook que proporciona acceso al objeto de ubicación actual.

🔻**useParams** 👉 _Obtén parámetros de la URL._

- Hook que devuelve un objeto con pares clave-valor de los parámetros de la URL.

# Redux ⬇️ biblioteca

biblioteca de gestión de estado que ayuda a mantener el estado de la aplicación de manera centralizada y predecible, facilitando la manipulación y actualización de los datos en toda la aplicación de React.

🔻**Store** 👉 _Almacén centralizado de estado._

- Almacén centralizado que contiene el estado global de la aplicación.

🔻**Reducer** 👉 _Cambios de estado por acción._

- Función pura que especifica cómo cambia el estado en respuesta a una acción.

🔻**Action** 👉 _Objeto que describe intención._

- Objeto que describe una intención de cambiar el estado. Debe tener una propiedad type que indique el tipo de acción.

🔻**Dispatch** 👉 _Despacha acciones para cambios._

- Método proporcionado por el store que se utiliza para despachar acciones y desencadenar cambios en el estado.

🔻**Middleware** 👉 _Funciones para lógica intermedia._

- Funciones que se ejecutan entre el envío de una acción y la actualización del estado. Se utilizan para manejar lógica asíncrona, realizar registros, etc.

🔻**Provider** 👉 _Proporciona acceso global al store._

- Componente de React que permite que los componentes secundarios accedan al store de Redux.

🔻**connect** 👉 _Conecta componente a Redux._

- Función que conecta un componente de React a Redux, permitiéndole acceder al estado y despachar acciones.

🔻**mapStateToProps** 👉 _Mapea estado a props._

- Función que mapea una porción del estado de Redux a las props de un componente.

🔻**mapDispatchToProps** 👉 _Mapea acciones a props._

- Función que mapea las acciones de Redux a las props de un componente.

🔻**combineReducers** 👉 _Combina múltiples reducers en uno._

- Función que combina varios reducers en uno solo para gestionar diferentes partes del estado de la aplicación.

🔻**createStore** 👉 _Crea un nuevo store Redux._

- Función que crea un nuevo store de Redux.
