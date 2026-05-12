/*Creamos este archivo js para gestionar el header y footer de forma dinámica, sin alterar el html de forma directa*/
document.addEventListener("DOMContentLoaded", () => {
    insertarHeader();
    insertarFooter();
});

function insertarHeader() {
    /*Buscamos el header*/
    const headerElement = document.querySelector("header");
    if (!headerElement) return;
    /*Insertamos el código HTML del header, con las rutas relativas correctas para cada página*/
    headerElement.innerHTML = `
        <nav class="navbar">
            <div class="nav-left">
                <a href="../index.html"><img class="logo" src="../assets/img/logocompleto-test.png" alt="Logo de ImpulsAR"></a>
            </div>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="../pages/servicios.html">Servicios</a></li>
                <li><a href="../pages/equipo.html">Equipo</a></li>
                <li><a href="../pages/pedido.html">Pedido</a></li>
                <li><a href="../pages/faq.html">FAQ</a></li>
                <li><a href="../pages/contacto.html">Contacto</a></li>
                <li><a href="../pages/login.html">Login</a></li>
                <li><a href="../pages/registro.html">Registro</a></li>
            </ul>
            <div class="nav-right"></div>
        </nav>
    `;
}

function insertarFooter() {
    /*Buscamos el footer*/
    const footerElement = document.querySelector("footer");
    if (!footerElement) return;
    /*Insertamos el código HTML del footer, con las rutas relativas correctas para cada página*/
    footerElement.innerHTML = `
         <div>
            <img src="../assets/img/logocompleto-test.png" alt="Logo de ImpulsAR" class="logo">
            <p id="descripcion-footer">Empresa líder en desarrollo de software a medida. Creamos soluciones innovadoras que impulsan el crecimiento de tu negocio.</p>
        </div>

        <div>
            <h3 id="txt-enlacesRapidos">Enlaces Rápidos</h3>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="equipo.html">Equipo</a></li>
                <li><a href="pedido.html">Pedido</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
        </div>

        <div>
            <h3 id="txt-contacto">Contacto</h3>
            <p id="txt-email"><i class="fa-solid fa-envelope"></i> info@impulsar.com</p>
            <p id="txt-telefono"><i class="fa-solid fa-phone"></i> +54 11 1234-5678</p>
            <address id="txt-direccion"><i class="fa-solid fa-location-dot"></i> Bahia Blanca, Argentina</address>
            <div class="redes-sociales">
                <a href="https://www.linkedin.com/home?originalSubdomain=es" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Tincho2319/ProgramacionIII-Practico-1" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://x.com/home?lang=es" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
        </div>
        <p>© 2026 Impulsar. Todos los derechos reservados.</p>
    `;
}
