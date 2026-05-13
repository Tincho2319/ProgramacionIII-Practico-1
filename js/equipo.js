/**
 * Configuración de ImpulsAR - Conexión con el Back-end en Render
 */
const API_URL_EQUIPO = 'https://impulsar-webapi-64jf.onrender.com/equipo'

/**
 * Función principal para obtener y mostrar los integrantes del equipo
 */
async function cargarEquipo() {
  const contenedor = document.querySelector('#contenedor-equipo')

  if (!contenedor) return

  try {
    const respuesta = await fetch(API_URL_EQUIPO)

    if (!respuesta.ok) {
      throw new Error('No se pudo conectar con el servidor del equipo.')
    }

    const equipo = await respuesta.json()

    contenedor.innerHTML = ''

    if (equipo.length === 0) {
      contenedor.innerHTML = '<p>Actualmente no hay integrantes cargados.</p>'
      return
    }

    equipo.forEach(integrante => {
      contenedor.innerHTML += `
        <article class="card-equipo">
          <img src="${integrante.imagen}" alt="${integrante.nombre}" class="imagen-equipo">

          <div class="texto-equipo">
            <h3>${integrante.nombre}</h3>
            <h4>${integrante.rol}</h4>
            <p>${integrante.descripcion}</p>

            <a href="${integrante.github}" target="_blank" class="link-github">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </article>
      `
    })
  } catch (error) {
    console.error('Error al cargar el equipo de ImpulsAR:', error)

    contenedor.innerHTML = `
      <p class="error">Hubo un problema al cargar el equipo. Por favor, intenta de nuevo más tarde.</p>
    `
  }
}

document.addEventListener('DOMContentLoaded', cargarEquipo)