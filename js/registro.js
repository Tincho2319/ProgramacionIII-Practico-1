const API_URL = "https://impulsar-webapi-64jf.onrender.com/auth/register";

document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('form-registro');

    if (formRegistro) {
        formRegistro.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita el error 405 y la recarga de página

            const datosRegistro = {
                email: document.getElementById('txt-email').value,
                password: document.getElementById('txt-password').value,
                nombre: document.getElementById('txt-nombre').value,
                apellido: document.getElementById('txt-apellido').value,
            };

            try {
                const respuesta = await fetch(API_URL, {
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datosRegistro)
                });

                const resultado = await respuesta.json();

                if (respuesta.ok && resultado.msg === "Correcto") {
                    // Si los datos fueron correctamente cargados en usuarios.json
                    alert(`¡Registro exitoso ${datosRegistro.nombre || ''}!`);
                    window.location.href = "/pages/login.html"; 
                } else {
                    alert("No se pudo registrar. Verifique los datos ingresados.");
                }

            } catch (error) {
                console.error("Error de conexión con Render:", error);
                alert("No se pudo conectar con el servidor. Verifique su conexión.");
            }
        });
    }
});