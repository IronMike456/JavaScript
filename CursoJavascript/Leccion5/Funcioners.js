//hoisting
miFuncion(3, 5); 
//se puede usar en cualquier parte del programa
//Declaracion de funcion
function miFuncion(a, b){
    console.log("suma" + " = " +  (a + b)); 
}

miFuncion(2, 3 ); 

//con return 
function miFuncion1(a, b){
    console.log(arguments); 
    return a+b; 
}
let resultado = miFuncion1(5,3); 
console.log(resultado);
//funcion como variable
let x = function(a,b){ return a+b}; 
resultado = x(1,2); 
console.log(resultado);
//self invoquing solo se usa una vez
(function(a, b){
    console.log("ejecutando la funcion self: " + (a+b));
})(2, 4);
//funciones como objetos funcion es metodo
console.log(typeof miFuncion); 
function miFuncion2(a, b){
    console.log(arguments); 
     return a + b; 
}
miFuncion2(10,1); 

var miFuncionTexto = miFuncion.toString(); 
console.log(miFuncionTexto);

//funciones tipo flecha ECMA script 6

const sumarFuncionTipoFlecha = (a,b) => a + b;  
resultado = sumarFuncionTipoFlecha(3,5); 
console.log(resultado); 

/**parametros vs argumentos*************************** */
//parametros son (a,b)
//argumentos son los valores de a,b
