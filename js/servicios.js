/**
 * Configuración de ImpulsAR - Conexión con el Back-end en Render
 */
const API_URL = "https://impulsar-webapi-64jf.onrender.com/servicios";

/**
 * Función principal para obtener y mostrar los servicios en el HTML
 */
async function cargarServicios() {
    // Buscamos el contenedor con la clase 'Razones' que definiste en tu HTML
    const contenedor = document.querySelector('.Razones');
    
    // Si no estamos en la página de servicios (donde no existe el contenedor), salimos de la función
    if (!contenedor) return;

    try {
        // Realizamos la petición al servidor de Render
        const respuesta = await fetch(API_URL);
        
        if (!respuesta.ok) {
            throw new Error("No se pudo conectar con el servidor de servicios.");
        }

        const servicios = await respuesta.json();
        
        // Limpiamos el contenido previo (como el mensaje de "Cargando...")
        contenedor.innerHTML = "";

        // Si no hay servicios cargados en el Back-end
        if (servicios.length === 0) {
            contenedor.innerHTML = "<p>Actualmente no hay servicios disponibles.</p>";
            return;
        }

        // Recorremos la lista de servicios y creamos las tarjetas dinámicamente
        servicios.forEach(servicio => {
            // Usamos las clases de CSS que ya tienes: 'Razon', 'texto_Titulo_Razones' y 'texto_Razon'
            contenedor.innerHTML += `
                <div class="Razon">
                    <h4 class="texto_Titulo_Razones">${servicio.nombre}</h4>
                    <p class="texto_Razon">${servicio.descripcion}</p>
                    <div class="Botones" style="margin-top: 15px;">
                        <a class="Boton_Contacto_Servicio" href="pedido.html?id=${servicio.id || ''}">
                            Solicitar Servicio
                        </a>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error al cargar los servicios de ImpulsAR:", error);
        contenedor.innerHTML = `
            <p class="error">Hubo un problema al cargar los servicios. Por favor, intenta de nuevo más tarde.</p>
        `;
    }
}

/**
 * Ejecución del script una vez que el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', cargarServicios);