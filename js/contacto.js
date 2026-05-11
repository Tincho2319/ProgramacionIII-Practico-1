/**
 * Configuración de ImpulsAR - Conexión de Formulario con el Back-end
 */
const API_URL_CONTACTO = "https://impulsar-webapi-64jf.onrender.com/contacto"; 

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById("form-contacto");
    const mensajeExito = document.getElementById("mensaje-exito");
    const inputEmail = document.querySelector('input[type="email"]');

    if (formulario) {
        formulario.addEventListener("submit", async function(e) {
            e.preventDefault(); // Evita que la página se recargue

            // 1. Validación básica de Email (ya que estamos en JS)
            if (inputEmail && !inputEmail.value.includes('@')) {
                inputEmail.classList.add('input-error');
                alert("Por favor, ingresa un correo válido.");
                return;
            }

            // 2. Recolección de datos del formulario
            const formData = new FormData(this);
            const datosParaEnviar = Object.fromEntries(formData.entries());

            try {
                // 3. Envío al Back-end en Render
                const respuesta = await fetch(API_URL_CONTACTO, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosParaEnviar)
                });

                if (respuesta.ok) {
                    // 4. Mostrar mensaje de éxito en el Front
                    if (mensajeExito) {
                        mensajeExito.style.display = "block";
                        mensajeExito.textContent = "¡Gracias por contactarnos! Tu pedido ha sido enviado con éxito.";
                    }
                    
                    // Limpiar el formulario
                    this.reset();
                    inputEmail.classList.remove('input-error');

                    // Ocultar el mensaje después de unos segundos
                    setTimeout(() => {
                        mensajeExito.style.display = "none";
                    }, 5000);
                } else {
                    throw new Error("Error en el envío al servidor.");
                }

            } catch (error) {
                console.error("Error al conectar con el Back-end:", error);
                alert("Lo sentimos, hubo un problema al enviar tu mensaje. Intentá de nuevo más tarde.");
            }
        });
    }
});