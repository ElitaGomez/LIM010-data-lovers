/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



  const nuevaPokeData = (POKEMON) => {
    const arrpoke= [];
    for (let i = 0; i<POKEMON.length; i++){
      arrpoke.push({
        'nombre':POKEMON[i].name
      })
    }
    console.log (arrpoke);
  };
  
  window.nuevaPokedata = nuevaPokeData;


