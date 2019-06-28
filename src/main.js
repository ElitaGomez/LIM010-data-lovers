/* Manejo del DOM */
const pokeData = POKEMON.pokemon;
const pantallaLogin = document.getElementById("login");
const name = document.getElementById("name");
const password = document.getElementById("password");
const error = document.getElementById("error");
const enviar = document.getElementById("enviar");
const pantallaPagina = document.getElementById("pagina");
const contenedor = document.getElementById("contenedor");

enviar.addEventListener('click', () => {
    if (password.value === 'LABORATORIA' && name.value === 'LABORATORIA') {
        pantallaLogin.classList.toggle("ocultar");
        pantallaPagina.classList.toggle("ocultar");
    } else {
        password.value = "";
        name.value = "";
        error.innerHTML = 'contraseña incorrecta';
    }

});

