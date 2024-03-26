<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://github.com/fullsnacker/journal-app">
    <img src="https://fullsnacker.github.io/assets/work004-xU_24Dj0.jpg" alt="Logo" width="400">
  </a>

<h3 align="center">Journal App</h3>

  <p align="center">
    App de journal (Diario) hecha con React.js.
    <br />
    Cuenta con autenticacion, creacion de usuarios con Firebase y guarda los datos de entradas con Firestore.
    <br />
    Puedes cargar imagenes en las entradas y se guardaran en Cloudinary.
    <br />
    <br />
    <a href="https://snournal.vercel.app/">Ver Demo</a>
    ·
    <a href="https://github.com/fullsnacker/journal-app/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/fullsnacker/journal-app/issues">Solicitar Feature</a>
  </p>
</div>

<!-- Contenidos -->
<details>
  <summary>Contenidos</summary>
  <ol>
    <li>
      <!-- <a href="#acerca-del-proyecto">Acerca Del Proyecto</a> -->
        <a href="#desarrollado-con">Desarrollado Con</a>
    </li>
    <li>
      <a href="#iniciando-el-proyecto">Iniciando el proyecto</a>
      <ul>
        <li><a href="#instalacion">Instalacion</a></li>
      </ul>
    </li>
    <!-- <li><a href="#uso">Uso</a></li> -->
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>

### Desarrollado Con

- [![React][React.js]][React-url]
- Firebase
- Firestore
- Cloudinary

<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>

<!-- Iniciando el proyecto -->

## Iniciando el proyecto

### Instalacion

1. Clona el repositorio
   ```sh
   git clone https://github.com/fullsnacker/journal-app.git
   ```
2. Instala los paquetes YARN
   ```sh
   yarn
   ```
3. Variables de entorno a guardar en tu .env:
<ul>
	<li>VITE_APP_FIREBASE_API_KEY,</li>
	<li>VITE_APP_FIREBASE_AUTHDOMAIN,</li>
	<li>VITE_APP_FIREBASE_PROJECT_ID,</li>
	<li>VITE_APP_FIREBASE_STORAGE_BUCKET,</li>
	<li>VITE_APP_FIREBASE_MESSAGING_SENDER_ID,</li>
	<li>VITE_APP_FIREBASE_APP_ID</li>
    <li>VITE_APP_CLOUDINARY_CLOUD_URL;</li>
    <li>VITE_APP_CLOUDINARY_PRESET_NAME;</li>
</ul>

4. Lanza el proyecto con:
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>

## Licencia

Distribuido bajo licencia MIT. Vea el archivo `LICENSE` para mas informacion.

<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>

## Contacto

Fullsnacker - [@fullsnacker](https://twitter.com/fullsnacker) - fullsnacker@gmail.com

Project Link: [https://github.com/fullsnacker/journal-app](https://github.com/fullsnacker/journal-app)

<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
