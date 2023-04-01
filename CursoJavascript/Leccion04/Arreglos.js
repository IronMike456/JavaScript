const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);
console.log(autos[0]);
console.log(autos[2]);
//arreglo for
for (let cont = 0; cont <= autos.length; cont ++){
console.log(autos[cont]); 

}
// modificar arreglo

autos [1] = 'Futurama'; 

console.log(autos); 
autos.push('Audi'); 
console.log(autos); 
// agregar elementios
console.log(autos.length); //cantidad de elementos
autos[5] = 'porsche'
console.log(autos); 

//preguintar si es un array
console.log(typeof autos); 
//ECMA JS 2015
console.log(Array.isArray(autos)); 

console.log(autos instanceof Array); 