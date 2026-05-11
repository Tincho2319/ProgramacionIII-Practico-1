const API_URL = "https://impulsar-webapi-64jf.onrender.com";

async function cargarServicios() {
    try {
        const respuesta = await fetch(`${API_URL}/servicios`);
        const datos = await respuesta.json();
        
        console.log("Datos recibidos del back:", datos);
        // Aquí podrías usar DOM para insertar los servicios en el HTML
    } catch (error) {
        console.error("Error al conectar con el back-end:", error);
    }
}

// Ejecutar cuando cargue la página
cargarServicios();