//Hertencia de metodos
//No es necesario declarar la palabra fuction
class Persona { // CLASE PADRE
    constructor(nombre, apellido ){
        this._nombre = nombre;
        this._apellido = apellido; 

    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }
    nombreCompleto(){
        return this._nombre + ' ' +  this._apellido; 
    }
}

class Empleado extends Persona { // clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //llama al constructor de la clase padre
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento; 
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
    //Sobreescritura
    nombreCompleto(){ //mismo nombre y mismos parametros
        return super.nombreCompleto() + ', '+this._departamento;
        //llama la funcion nombreCompleto y concatena 
    }
}

/** sobre escritura  */
let empleado1 = new Empleado('Mike', 'Rodriguez', 'IT')

console.log(empleado1.nombreCompleto()); 
