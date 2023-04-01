let miNumero = "18j"; 

let edad = Number(miNumero); 
console.log(edad); 
if(isNaN(edad)){ //Is No a Number
    console.log("no es un numero");
}else{
    if(edad >=18){
        console.log("Puede votar");
    }else{
        console.log("Muy joven para votar"); 
    }
    let resultado = (edad >= 18) ? "Puerde votar" : "Muy joven para votar"
    console.log(resultado); 
    
}

// Operador ternario 

