/* Manejo del DOM */
const pokeData =POKEMON.pokemon;
const pantallaLogin = document.getElementById("login");
const name = document.getElementById("name");
const password = document.getElementById("password");
const error = document.getElementById("error");
const enviar = document.getElementById("btnenviar");
const pantallaPagina = document.getElementById("pagina");
const contenedor = document.getElementById("contenedor");
const ordena = document.getElementById("a-z");
const numero = document.getElementById("numero");
const tipos = document.getElementById("tipos");



enviar.addEventListener('click',() => {
    
    
    if( password.value === '' && name.value===''){

        pantallaLogin.classList.toggle("ocultar");
        pantallaPagina.classList.toggle("ocultar");

    }else{
        password.value="";
        name.value ="";
        error.innerHTML ='contraseña incorrecta';
    }

});

 const mostrarPoker = (data) => {

     let mostrar = '';
    for(let i = 0; i< data.length; i++){
       let llamado = `
         <div class="contener">
            <img src ="${data[i].img}"/>
            <p>Nombre : ${data[i].name}</p>
            <P>Numero : ${data[i].num}</p>
            <p>Debilidad : ${data[i].weaknesses}</p>
         </div>`;
         
         mostrar+= llamado;
    }
    return mostrar;

 };
 contenedor.innerHTML = mostrarPoker(pokeData);

 tipos.addEventListener('change',()  => {
   contenedor.innerHTML = mostrarPoker(window.pokemon.filtrarData(pokeData,tipos.value));
 });

 ordena.addEventListener('change',() =>{
   contenedor.innerHTML = mostrarPoker(window.pokemon.ordenaPoke(pokeData,ordena.value));
 });

