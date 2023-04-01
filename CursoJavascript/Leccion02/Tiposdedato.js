//Tipos de datos
//string 
var nombre = "carlos";
console.log(nombre);
//numerico
var numero = 1000;
console.log(typeof numero);

var numero2 = 10.344;
console.log(typeof numero2);
//Tipo objeto
var objeto = {
    nombre:"Juan",
    apellido: "Perez",
    telefono: "55473487",
}

console.log(objeto);

//Tipo boolean true y folse

var bandera = true;
console.log(bandera);
//tipo de dato funcion

function mifuncion(/* recibimiento de datos*/){

}

console.log(typeof mifuncion)
//Tipo symbol

var simbolo = Symbol("mi sombolo"); // valor unico de una variable

// tipo clase es una fuction 
class Persona{
    constructor(nombre, apellido){
        this.apellido = apellido;
        this.nombre = nombre;
    }
}
console.log(Persona);
//Tipo undefined

var x;
console.log(x);
// Tipo null
var y = null;
console.log(typeof y);

//Arreglos  son de tipo object

var autos = ['BMW', 'AUDI', 'VOLVO'];
console.log(autos);
console.log(typeof autos);

//valores vacios o cadena vacia
var z = '';
console.log(z);
console.log(typeof z);
