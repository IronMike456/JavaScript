//clase es una plantilla  que contiene atributos y metodos
class Persona {
    constructor(nombre, apellido ){
        this.nombre = nombre;
        this.apellido = apellido; 

    }
}
//instancia de clase
let persona1 = new Persona('Juan', 'Perez'); //reserve espacio para crear objeto persona
console.log(persona1); 

//metodos get y set 

class Persona1 {
    constructor(nombre, apellido ){
        this._nombre = nombre;
        this._apellido = apellido; 

    }
    get nombre(){
        return this._nombre;
    }
    set apellido(apellido){
        this._apellido = apellido
    }
}
let persona2 = new Persona1('Mike', 'Rodriguez');
console.log(persona2._nombre)
console.log(persona2._apellido); 
persona2.apellido = 'Figueroa';//set apellido
console.log(persona2._apellido); //get apellido

/****** HOISTING AND CLASSES */
//No es posible crear objetos antes de declarar la clase
//NO APLÑICA EL CONCEPTO DE HOISTING
