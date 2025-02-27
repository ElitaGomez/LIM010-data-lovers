/* Manejo del DOM */
const pokeData = POKEMON.pokemon;
const pantallaLogin = document.getElementById('login');
const name = document.getElementById('name');
const password = document.getElementById('password');
const error = document.getElementById('error');
const enviar = document.getElementById('btnenviar');
const pantallaPagina = document.getElementById('pagina');
const contenedor = document.getElementById('contenedor');
const ordena = document.getElementById('a-z');
const aparicion = document.getElementById('aparicion');
const tipos = document.getElementById('tipos');
const evolucion = document.getElementById('evolucion'); 
const porcentaje = document.getElementById('porcentaje'); 
const inicio = document.getElementById('inicio'); 
const debilidad = document.getElementById('debilidad'); 
enviar.addEventListener('click', () => {
  if (password.value === 'LABORATORIA' && name.value === 'LABORATORIA') {
    pantallaLogin.classList.toggle('ocultar');
    pantallaPagina.classList.toggle('ocultar');
  } else {
    password.value = '';
    name.value = '';
    error.innerHTML = 'contraseña incorrecta';
  }
});

const mostrarPoker = (data) => {
  let mostrar = '';
  for (let i = 0; i < data.length; i++) {
    let llamado = `
      <div class="flip-card  ">
        <div class="flip-card-inner">
          <div class="flip-card-front ">
            <p class="numero">${data[i].num}</p>
            <img src="${data[i].img}" alt="img"/>
            <p>${data[i].name}</p>
            <p>Aparición: ${data[i].avg_spawns}</p>
          </div>
          <div class="flip-card-back">
            <p>Tipo: ${data[i].type}</p>
            <p>Altura: ${data[i].height}</p>
            <p>Peso: ${ data[i].weight}</p>
            <p>Debilidad:${data[i].weaknesses}</p>
            <p>Huevos: ${data[i].egg}</P>
          </div>
        </div> 
      </div>
        `;
    mostrar += llamado;
  }
  return mostrar;
};
 
const llenarPoke = (data) => {
  contenedor.innerHTML = mostrarPoker(data);
};

llenarPoke(pokeData);

tipos.addEventListener('change', () => {
  if (tipos.value === '') {
    llenarPoke(pokeData);
  } else
    llenarPoke(window.pokemon.filtrarData(pokeData, tipos.value));
});
ordena.addEventListener('change', () =>{
  if (ordena.value === '') {
    llenarPoke(pokeData);
  } else
    llenarPoke(window.pokemon.ordenaPoke(pokeData, ordena.value));
});

aparicion.addEventListener('change', () =>{
  if (aparicion.value === '') {
    llenarPoke(pokeData);
  } else
    llenarPoke(window.pokemon.ordenaAparicion(pokeData, aparicion.value));
});
  
debilidad.addEventListener('change', () =>{
  if (debilidad.value === '')
    llenarPoke(pokeData);
  else
    llenarPoke(window.pokemon.filtrarDebilidad(pokeData, debilidad.value));
});
evolucion.addEventListener('change', () =>{
  const pokeHuevos = window.pokemon.huevoPoke(pokeData, evolucion.value);
  const cantidadFiltrada = pokeHuevos.length;
  const porcentajePoke = (cantidadFiltrada / 151) * 100;
  porcentaje.value = porcentajePoke.toFixed(2);
  contenedor.innerHTML = mostrarPoker(pokeHuevos);  
});

inicio.addEventListener('click', () =>{
  name.value = '';
  password.value = '';
  pantallaLogin.classList.toggle('ocultar');
  pantallaPagina.classList.toggle('ocultar');
});

// Funcionalidad  para mostrar el menú en pantalla pequeña//

const burger = document.getElementById('burger');
const menuBar = document.getElementById('menubar');

burger.addEventListener('click', () =>{
  menuBar.classList.toggle('visible');
});