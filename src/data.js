/* Manejo de data */

//  función de lista de pokemones//

const dataPoker = (data) => {
  let arrayPoke = [];
  for (let i =0; i< data.length; i++){
     arrayPoke.push({
      nombre : data[i].name,
      imagen : data[i].img,
      numero : data[i].num,
      aparicion: data[i].avg_spawns,
        /*tipo : data[i].type,
        Peso : data[i].weight,
        Altura: data[i].height,*/
     
    }); 

    }
    return arrayPoke;
   
};

//  función de tipos de pokemon//

const filtrarData = (data,tipo) => {
    return data.filter((elemt)=>{
    return elemt.type.indexOf(tipo) > -1
  })

 };

//función de orde a-z//
const ordenaPoke = (data,orden ) =>{
  data.sort((az,za) =>{
    orden === name;
    let ascendente = az.name.toLowerCase();
    let decendente = za.name.toLowerCase();
    return ascendente < decendente ? -1 : ascendente > decendente ? 1 : 0;
  });
   if(orden === 'Ascendente'){
  return data;
   }else {
     return data.reverse()
   }
};


window.pokemon = {
  dataPoker: dataPoker,                     
  filtrarData:filtrarData,
  ordenaPoke : ordenaPoke, 
 
 
}; 
