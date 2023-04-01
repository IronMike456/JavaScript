let miNumero = "18"; 

let edad = Number(miNumero); 
console.log(typeof edad); 

if(edad >=18){
    console.log("Puede votar");
}else{
    console.log("Muy joven para votar"); 
}

// Operador ternario 

let resultado = (edad >= 18) ? "Puerde votar" : "Muy joven para votar"
console.log(resultado); 