document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    
    // 1. Autocompletado de datos del usuario logueado
    const nombreGuardado = localStorage.getItem('usuarioNombre');
    const emailGuardado = localStorage.getItem('usuarioEmail');

    if (nombreGuardado) document.getElementById('nombre').value = nombreGuardado;
    if (emailGuardado) document.getElementById('email').value = emailGuardado;

    // 2. Bloqueo de fechas pasadas en el calendario
    const inputFecha = document.getElementById('fecha-estimada-inicio');
    if (inputFecha) {
        inputFecha.min = new Date().toISOString().split("T")[0];
    }

    // 3. Manejo del envío del formulario
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Creamos el objeto con los datos del formulario
        const formData = new FormData(formulario);
        const pedidoData = {
            usuarioEmail: emailGuardado, // Para saber a quién asignarle el pedido
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            telefono: formData.get('telefono'),
            servicio: formData.get('servicio'),
            presupuesto: formData.get('presupuesto'),
            fechaInicio: formData.get('fecha-estimada-inicio'),
            urgencia: formData.get('urgencia'),
            caracteristicas: formData.getAll('caracteristicas'), // Captura todos los checkboxes
            descripcion: formData.get('descripcion')
        };

        try {
            const respuesta = await fetch('https://impulsar-webapi-64jf.onrender.com/pedidos/solicitar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pedidoData)
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                alert("¡Solicitud enviada con éxito! Nos contactaremos pronto.");
                formulario.reset();
                window.location.href = "perfil.html"; // Redirigimos al perfil para ver los pedidos
            } else {
                alert("Error: " + resultado.msg);
            }
        } catch (error) {
            console.error("Error al enviar el pedido:", error);
            alert("No se pudo conectar con el servidor.");
        }
    });
});