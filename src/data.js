/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataPoker = (data) => {
  let arrayPoke = [];
  for (let i =0; i< data.length; i++){
     arrayPoke.push({
      nombre : data[i].name,
      imagen : data[i].img,
      numero : data[i].num,
        tipo : data[i].type,
    }); 

    }
    return arrayPoke;
   
};

const filtrarData = (data,tipo) => {
    return data.filter((elemt)=>{
    return elemt.type.indexOf(tipo) > -1
  })

 };

window.pokemon = {
  dataPoker: dataPoker,
  filtrarData:filtrarData, 
 
};