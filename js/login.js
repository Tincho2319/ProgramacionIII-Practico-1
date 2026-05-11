const API_URL_LOGIN = "https://impulsar-webapi-64jf.onrender.com/login"; 

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');

    if (formLogin) {
        formLogin.addEventListener('submit', async (e) => {
            e.preventDefault();

            const datos = {
                email: document.getElementById('txt-email').value,
                password: document.getElementById('txt-password').value
            };

            try {
                const respuesta = await fetch(API_URL_LOGIN, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                });

                const resultado = await respuesta.json();

                if (respuesta.ok && resultado.msg === "Correcto") {
                    alert(`¡Bienvenido ${resultado.usuario}! Datos correctos.`);
                    // Redirigir al perfil
                    window.location.href = "perfil.html";
                } else {
                    alert("Usuario o contraseña incorrectos. Intente de nuevo.");
                }

            } catch (error) {
                console.error("Error al conectar con el servidor:", error);
                alert("Hubo un error en la conexión con el servidor.");
            }
        });
    }
});
