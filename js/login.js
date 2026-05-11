const API_URL = "https://impulsar-webapi-64jf.onrender.com/auth/login";

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');

    if (formLogin) {
        formLogin.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita el error 405 y la recarga de página

            const datos = {
                email: document.getElementById('txt-email').value,
                password: document.getElementById('txt-password').value
            };

            try {
                const respuesta = await fetch(API_URL, {
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                });

                const resultado = await respuesta.json();

                if (respuesta.ok && resultado.msg === "Correcto") {
                    // Si los datos en usuarios.json coinciden
                    alert(`¡Bienvenido ${resultado.usuario || ''}!`);
                    window.location.href = "index.html"; 
                } else {
                    alert("Email o contraseña incorrectos.");
                }

            } catch (error) {
                console.error("Error de conexión con Render:", error);
                alert("No se pudo conectar con el servidor. Verifique su conexión.");
            }
        });
    }
});