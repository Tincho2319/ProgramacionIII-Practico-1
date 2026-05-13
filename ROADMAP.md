# 🗺️ Roadmap del Proyecto - TP3

Este documento detalla la planificación y distribución de tareas para el desarrollo del Trabajo Práctico Nº3 de Programación III.

## 📌 Información General
- **Materia:** Programación III
- **Fecha de Entrega:** Miércoles 13 de mayo, 23:59 hs.
- **Metodología de Trabajo:** Git Flow

---

## 🎯 Etiquetas de Prioridades
* 🔴 **[OBLIGATORIO]:** Requisito fundamental exigido en el TP. Bloquea la entrega si no está hecho.
* 🟢 **[OPCIONAL]:** Funcionalidad extra para sumar valor y aprender más.

---

## 👥 División de Tareas

### 1. Martin Alcaraz (Inicialización, Deploy y Backend de Perfil)
**Estado:** En Proceso
- [x] 🔴 **[OBLIGATORIO]** Inicializar el proyecto Node.js (`npm init`).
- [x] 🔴 **[OBLIGATORIO]** Crear estructura de carpetas (`controllers`, `data`, `models`, `routes`) y archivos base.
- [x] 🔴 **[OBLIGATORIO]** Instalar dependencias.
- [x] 🔴 **[OBLIGATORIO]** Realizar deploy inicial de la API en Render.
- [ ] 🔴 **[OBLIGATORIO]** Desarrollar endpoint `GET /perfil/:id`.
- [ ] 🔴 **[OBLIGATORIO]** Crear el archivo JSON base simulando los datos del usuario logueado.
- [x] 🔴 **[OBLIGATORIO]** Refactorizar el Front-end de login, contacto, registro, pedido, faq,servicios y equipo para consumir el listado desde la API en Render con `fetch` y `try/catch`.
- [x] 🔴 **[OBLIGATORIO]** *(Asumido por Martin)* Desarrollar lógica de `controllers/autorizacionController.js` y `routes/autorizacionRoutes.js` (Backend de Login).
      
### 2. Fede (Documentación y Frontend de Perfil)
**Estado:** En Proceso
- [ ] 🔴 **[OBLIGATORIO]** Redacción del `README.md`.
- [x] 🔴 **[OBLIGATORIO]** Planificación de la División de Tareas y redacción del `ROADMAP.md`.
- [ ] 🔴 **[OBLIGATORIO]** Documentación técnica detallada del 90% de las funciones.
- [ ] 🔴 **[OBLIGATORIO]** Incluir ejemplos de estructura de cada archivo JSON en la documentación.
- [x] 🔴 **[OBLIGATORIO]** Desarrollo visual del apartado de perfil de usuario en el Front-end.
- [x] 🔴 **[OBLIGATORIO]** Conectar la vista del perfil con el endpoint desarrollado por Martin.
- [x] 🔴 **[OBLIGATORIO]** Creación y maquetación de la nueva página de Login.

### 3. Matias (Listado de Servicios - Full Stack)
**Estado:** Pendiente
- [x] 🔴 **[OBLIGATORIO]** Realizar la configuración y deploy del Front-end en GitHub Pages.
- [ ] 🔴 **[OBLIGATORIO]** Crear el archivo `data.json` garantizando más de 13 servicios.
- [ ] 🔴 **[OBLIGATORIO]** Desarrollar endpoint `GET /servicios`.
- [ ] 🔴 **[OBLIGATORIO]** Refactorizar el Front-end para consumir el listado desde la API en Render con `fetch` y `try/catch`.

### 4. Nahuel (Detalle de Servicios y Buscador - Full Stack)
**Estado:** Pendiente
- [ ] 🔴 **[OBLIGATORIO]** Desarrollar endpoint `GET /servicios/:id` para el detalle de un servicio.
- [ ] 🔴 **[OBLIGATORIO]** Migrar la vista de detalle en el Front-end para que consuma los datos de la API.
- [ ] 🟢 **[OPCIONAL]** Desarrollar e integrar la lógica del "Buscador Sencillo".

### 5. Homero (Backend y Frontend: Equipo y Deploy del Cliente)
**Estado:** Pendiente
- [ ] 🔴 **[OBLIGATORIO]** Crear JSON de los miembros del equipo y desarrollar el endpoint `GET /equipo`.
- [ ] 🔴 **[OBLIGATORIO]** Dinamizar la vista del equipo en el Front-end consumiendo la API.

### 6. Nicolás (Login y Experiencia de Usuario)
**Estado:** Pendiente
- [ ] 🟢 **[OPCIONAL]** Desarrollar endpoint `POST /login` validando credenciales contra un JSON.
- [ ] 🟢 **[OPCIONAL]** Implementar efectos de carga ("Spinners" o "Cargando...") en el Front-end.
- [ ] 🟢 **[OPCIONAL]** Establecer y unificar las `flags` (`console.log`) en las rutas.

---

## ⚙️ Requisitos Técnicos Clave (Bloqueantes)
- [x] 🔴 **[OBLIGATORIO]** API desplegada en Render.
- [x] 🔴 **[OBLIGATORIO]** Front-end desplegado en GitHub Pages.
- [x] 🔴 **[OBLIGATORIO]** Uso estricto de funciones asíncronas con `try/catch`.
- [ ] 🔴 **[OBLIGATORIO]** Documentación completa en `README.md`.
