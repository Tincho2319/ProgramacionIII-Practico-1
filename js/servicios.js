/**
 * Configuración de ImpulsAR - Conexión con el Back-end en Render
 */
const API_URL = "https://impulsar-webapi-64jf.onrender.com/servicios";

/**
 * Función principal para obtener y mostrar los servicios en el HTML
 */
async function cargarServicios() {

    const grid = document.getElementById('form-grid');
    
    try {
        // Realizamos la petición al servidor de Render
        const respuesta = await fetch(API_URL);
        
        if (!respuesta.ok) {
            throw new Error("No se pudo conectar con el servidor de servicios.");
        }

        const servicios = await respuesta.json();

        // Recorremos la lista de servicios y creamos las tarjetas dinámicamente
        servicios.forEach(servicio => {
            const nuevoCampo = document.createElement('section');
            nuevoCampo.classList.add('campo');

            const ncTop = document.createElement('div');
            ncTop.classList.add('campo-top');

            const ncBot = document.createElement('div');
            ncBot.classList.add('campo-bot');

            const nombre = document.createElement('h2');
            nombre.textContent = `${servicio.nombre}`;

            const desc = document.createElement('p');
            desc.textContent = `${servicio.desc}`;

            const footSolicitar = document.createElement('div');
            footSolicitar.classList.add('foot-solicitar');

            const precio = document.createElement('p');
            precio.classList.add('precio');
            precio.textContent = `Desde $${servicio.precio}`;

            const pedir = document.createElement('a');
            pedir.classList.add('solicitar');
            pedir.href = `pedido.html?id=${servicio.id}`;
            pedir.textContent = "Solicitar --->";

            footSolicitar.appendChild(precio);
            footSolicitar.appendChild(pedir);

            ncTop.appendChild(nombre);
            ncTop.appendChild(desc);
            ncBot.appendChild(document.createElement('hr'))
            ncBot.appendChild(footSolicitar);

            nuevoCampo.appendChild(ncTop);
            nuevoCampo.appendChild(ncBot);

            grid.appendChild(nuevoCampo);
        });

    } catch (error) {
        console.error("Error al cargar los servicios de ImpulsAR:", error);
        grid.innerHTML = `
            <p class="error">Hubo un problema al cargar los servicios. Por favor, intenta de nuevo más tarde.</p>
        `;
    }
}

/**
 * Ejecución del script una vez que el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', cargarServicios);