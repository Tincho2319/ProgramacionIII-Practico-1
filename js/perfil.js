const cargarPerfil = async () => {
    try{
        const respuesta = await fetch("https://impulsar-webapi-64jf.onrender.com/perfil/1");
        const datos = await respuesta.json();
        console.log(datos);
        
        // Selecciono elementos del DOM
        const nombre = document.getElementById("nombre-usuario");
        const email = document.getElementById("email-usuario");
        const fechaRegistro = document.getElementById("fecha-registro");
        const imagen = document.getElementById("imagen-usuario");
        const lista = document.getElementById("lista-pedidos");

        // Inyecto los datos del usuario en el DOM
        nombre.textContent = datos.nombre;
        email.textContent = datos.email;
        fechaRegistro.textContent = datos.fechaRegistro;
        imagen.src = datos.imagen;
        
        // Renderizo los pedidos
        // Vacio el contenedor de la lista
        lista.innerHTML = "";
        
        // Por cada pedido, creo el HTML (un <li> con sus clases, la <img>, el <h4>) y lo sumo al innerHTML de la lista.
        datos.pedidos.forEach(pedido => {
            lista.innerHTML += `
                <li class="perfil__pedidos-item">
                    <img class="perfil__pedidos-imagen" src="${pedido.imagen}" alt="${pedido.titulo}">
                    <div class="perfil__pedidos-info">
                        <div class="perfil__pedidos-titulo-row">
                            <h4 class="perfil__pedidos-nombre">${pedido.titulo}</h4>
                        </div>
                        <p class="perfil__pedidos-fecha">${pedido.estado}</p>
                    </div>
                </li>
            `;
        });
    }catch(error){
        console.log("Error al cargar el perfil: " + error);
        document.getElementById("lista-pedidos").innerHTML = "<li>Error al conectar con la API.</li>";
    }
};

cargarPerfil();