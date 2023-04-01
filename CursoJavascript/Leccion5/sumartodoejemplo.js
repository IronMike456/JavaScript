let resultado = sumarTodos(1,2,3,4,5,6,7,5); 
console.log(resultado); 

function sumarTodos(){
    let suma = 0
    for(let i =0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma; 
}
