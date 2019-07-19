/* Manejo de data */

//  función de tipos de pokemon//

const filtrarData = (data, tipo) => {
  return data.filter((elemt) => {
    return elemt.type.indexOf(tipo) > -1;
  });
};

// funcion filtro por debilidad//

const filtrarDebilidad = (data, debilidad) =>{
  return data.filter(element => {
    return element.weaknesses.indexOf(debilidad) > -1;
  });
};

// función de orde a-z//
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
    return ordenado.reverse();
  }
};

// funcion ordenar por spawn(menor-mayor)//
const ordenaAparicion = (data, orden) => {
  const arrAparicion = data.slice().sort((aa, bb) => {
    if (aa.avg_spawns < bb.avg_spawns) {
      return 1;
    } else if (aa.avg_spawns > bb.avg_spawns) {
      return -1;
    }
  });
  if (orden === 'mayor') {
    return arrAparicion;
  } else if (orden === 'menor') {
    return arrAparicion.reverse();
  };
}; 

const huevoPoke = (data, kilometro) => {
  return data.filter((elemt) => {
    return elemt.egg.indexOf(kilometro) > -1;
  });
};


window.pokemon = {                    
  filtrarData: filtrarData,
  ordenaPoke: ordenaPoke,  
  huevoPoke: huevoPoke,
  ordenaAparicion: ordenaAparicion,
  filtrarDebilidad: filtrarDebilidad, 
};

