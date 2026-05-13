const API_URL = "https://impulsar-webapi-64jf.onrender.com/auth/registro";

document.addEventListener('DOMContentLoaded', () => {

    const formRegistro = document.getElementById('registro-form');

    if(formRegistro){
        formRegistro.addEventListener('submit', async (e)=>{

            e.preventDefault();

            const datos = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                nombre: document.getElementById('nombre').value,
            };

            try{
                const respuesta = await fetch(API_URL,{
                    method : 'POST',
                    headers : {'Content-type': 'aplicattion/json'},
                    body = JSON.stringify(datos)
                });
                const resultado = await respuesta.json();

                if(respuesta.ok){

                    alert('Usuario creado correctamente')

                    window.location.href = "registro.html"
                }else{
                    alert(resultado.msg);
                }
            }catch(error){

                console.error(error);

                alert("Error al conectar con la API")
            }
        });
    }
});