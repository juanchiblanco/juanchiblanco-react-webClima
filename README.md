# ☀️ Web del Clima - React App

## 📌 Descripción

Aplicación web desarrollada con **React** que permite al usuario ingresar una **ciudad** y un **país**, consultar el clima actual utilizando la API de [OpenWeatherMap](https://openweathermap.org/), y mostrar los datos meteorológicos correspondientes. En caso de error (por ejemplo, una ciudad no existente), se muestra un mensaje indicando que no se encontraron datos.

---

## 🧩 Componentes principales

- **Título**: Encabezado de la app.
- **Formulario**: Permite ingresar ciudad y país.
- **Clima**: Muestra los datos meteorológicos obtenidos.
- **Error**: Muestra un mensaje si la ciudad no se encuentra o la búsqueda falla.

---

## 🎯 Funcionalidades

- 🔍 Búsqueda de clima por ciudad y país.
- 🌡️ Muestra datos como:
  - Temperatura actual
  - Sensación térmica
  - Descripción del clima
  - Humedad
  - Icono del estado climático
- ⚠️ Validación:
  - Muestra un cartel si faltan campos.
  - Muestra un mensaje de error si la ciudad no existe.

---

## 🛠️ Tecnologías utilizadas

- **React**
- **Axios** o `fetch`
- **React Hooks** (`useState`, `useEffect`)
- **CSS/Bootstrap** para estilos

---

## 🔌 API utilizada

- [OpenWeatherMap API](https://openweathermap.org/current)

  Parámetros básicos:
  - `q=ciudad,país`
  - `appid=tu_api_key`
  - `units=metric` (para temperatura en °C)

  Ejemplo de URL:
https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires,AR&appid=TU_API_KEY&units=metric

yaml
Copiar
Editar

---

## 🗂️ Estructura sugerida

/src
/components
Formulario.jsx
Clima.jsx
Error.jsx
App.jsx
index.js

yaml
Copiar
Editar

---

## ▶️ Instrucciones para ejecutar

1. Clonar este repositorio:

git clone https://github.com/tu-usuario/web-del-clima.git

markdown
Copiar
Editar

2. Instalar dependencias:

npm install

markdown
Copiar
Editar

3. Crear archivo `.env` en la raíz y agregar tu API key:

VITE_API_KEY=tu_clave_openweathermap

markdown
Copiar
Editar

4. Iniciar la aplicación:

npm run dev

yaml
Copiar
Editar

---

## 📸 Captura de pantalla (opcional)

_Incluir una imagen si querés mostrar cómo se ve la app._

---

## ✍️ Autor

**Juan Manuel Blanco**  
Proyecto React - Web del Clima

---

¡Consultá el clima en cualquier lugar del mundo! 🌎🌤️