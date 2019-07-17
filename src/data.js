/* Manejo de data */

//  función de lista de pokemones//

const dataPoker = (data) => {
  let arrayPoke = [];
  for (let i = 0; i < data.length; i++) {
    arrayPoke.push({
      nombre: data[i].name,
      imagen: data[i].img,
      numero: data[i].num,
      aparicion: data[i].avg_spawns,
      huevos: data[i].egg,
      tipo : data[i].type,
    });

  }
  return arrayPoke;
};

//  función de tipos de pokemon//

const filtrarData = (data, tipo) => {
  return data.filter((elemt) => {
    return elemt.type.indexOf(tipo) > -1
  })
};

// funcion filtro por debilidad//------

const filtrarDebilidad = (data, debilidad) =>{
  return data.filter(element=>{
    return element.weaknesses.indexOf(debilidad) >-1
  }
  )};


  //función de orde a-z//
const ordenaPoke = (data, orden) => {
  const ordenado = data.slice().sort((az, za) => {
    orden === name;
    let ascendente = az.name.toLowerCase();
    let decendente = za.name.toLowerCase();
    return ascendente < decendente ? -1 : ascendente > decendente ? 1 : 0;
  });
  if (orden === 'Ascendente') {
    return ordenado;
  } else {
    return ordenado.reverse()
  }
};


//funcion ordenar por spawn(menor-mayor)//
const ordenaAparicion = (data, orden) => {
  const arrAparicion = data.slice().sort((aa, bb) => {
    if (aa.avg_spawns < bb.avg_spawns) {
      return 1;
    } else if (aa.avg_spawns > bb.avg_spawns) {
      return -1;
    }
    return 0;
  });
  if (orden === 'mayor'){
    return arrAparicion;
  }
  else if(orden === 'menor') {
    return arrAparicion.reverse();
  }
  return 0;
};

const huevoPoke = (data, kilometro) => {
  return data.filter((elemt) => {
    return elemt.egg.indexOf(kilometro) > -1
  })
};


window.pokemon = {
  dataPoker: dataPoker,                     
  filtrarData:filtrarData,
  ordenaPoke : ordenaPoke,  
  huevoPoke:huevoPoke,
  ordenaAparicion:ordenaAparicion,
  filtrarDebilidad : filtrarDebilidad, 
};

