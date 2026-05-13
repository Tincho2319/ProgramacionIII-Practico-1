const API_URL = "https://impulsar-webapi-64jf.onrender.com/auth/login";

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
                const respuesta = await fetch(API_URL, {
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                });

                const resultado = await respuesta.json();

                if (respuesta.ok && resultado.msg === "Correcto") {
                    // GUARDAR DATOS EN LOCALSTORAGE
                    // Guardamos el ID que viene del servidor para usarlo en /perfil/:id
                    localStorage.setItem('usuarioId', resultado.id);
                    localStorage.setItem('usuarioNombre', resultado.usuario);

                    alert(`¡Bienvenido ${resultado.usuario || ''}!`);
                    
                    // Redirigimos a la página de perfil
                    window.location.href = "perfil.html"; 
                } else {
                    alert(resultado.msg || "Email o contraseña incorrectos.");
                }

            } catch (error) {
                console.error("Error de conexión con Render:", error);
                alert("No se pudo conectar con el servidor.");
            }
        });
    }
});