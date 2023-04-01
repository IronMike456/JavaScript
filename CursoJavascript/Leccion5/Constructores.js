//constructores
//FUNCION CONSTRUCTOR DE TIPO PERSONA
function Persona(nombre, apellido, email){
    this.nombre = nombre; 
    // prpiedad     //variable 
    this.apellido = apellido; 
    this.email = email; 
    this.nombreCompleto = function(){
            return this.nombre + ' ' + this.apellido;
    }
}
                    //metodo constructor
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com')
console.log( padre ); 
console.log( padre.nombreCompleto());

let madre = new Persona('Angela', 'Ramirez', 'angela@mail.com')
console.log(madre); 
console.log( madre.nombreCompleto())
