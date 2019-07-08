/* Manejo de data */

const dataPoker = (data) => {
  let arrayPoke = [];
  for (let i =0; i< data.length; i++){
     arrayPoke.push({
      nombre : data[i].name,
      imagen : data[i].img,
      numero : data[i].num,
    }); 

    }
    return arrayPoke;
   
};


window.pokemon = {
  dataPoker: dataPoker, 

};