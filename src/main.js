/* Manejo del DOM */
const pantallaLogin = document.getElementById("login");
const name = document.getElementById("name");
const password = document.getElementById("password");
const error = document.getElementById("error");
const enviar = document.getElementById("enviar");
const pantallaPagina = document.getElementById("pagina"); 


enviar.addEventListener('click',()=>{
    name.value ="";
    password.value ="";
    
    if( password.value === 'LABORATORIA'){
        pantallaLogin.classList.toggle("ocultar");
        pantallaPagina.classList.toggle("ocultar");

    }else{
        error.innerHTML ='contraseña incorrecta';
    }

});