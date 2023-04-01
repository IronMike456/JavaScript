//Prototype
function Persona(nombre, apellido, email){
    this.nombre = nombre; 
    // prpiedad     //variable 
    this.apellido = apellido; 
    this.email = email; 
    this.nombreCompleto = function(){
            return this.nombre + ' ' + this.apellido;
    }
}
Persona.prototype.tel = '443334344'

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com')
padre.tel = '12232222';
console.log( padre ); 
console.log( padre.tel);

let madre = new Persona('Juan', 'Perez', 'jperez@mail.com')
console.log( madre ); 
console.log( madre.tel);
