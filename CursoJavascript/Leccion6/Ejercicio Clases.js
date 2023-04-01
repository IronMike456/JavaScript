class Persona { // CLASE PADRE
    static contadorObjetosPersona = 0; //Atributo estatico
    constructor(nombre, apellido, edad ){
        this._nombre = nombre;
        this._apellido = apellido; 
        this._edad = edad;
        this._idPersona = ++Persona.contadorObjetosPersona;//preincremento
    }
    get idPersona(){
        return this._idPersona; 
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
    get edad(){
        return this._edad; 
    }
    set edad(edad){
        this._edad = edad; 
    }
    datosCompletos(){
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellido}   
                ${this._edad}`; //template string
    }
    toString(){
        return this.datosCompletos();   
    }
 
}

class Empleado extends Persona { // clase hija
    static contadorEmpleado = 0; 
    constructor(nombre, apellido, edad, sueldo){
    super(nombre, apellido, edad); //llama al constructor de la clase padre
    this._sueldo= sueldo;
    this._iDEmpleado = ++Empleado.contadorEmpleado; 
    }
    get idEmpleado(){
        return this._iDEmpleado; 
    }
    get sueldo(){
        return this._sueldo; 
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    //Sobreescritura
    toString(){ //mismo nombre y mismos parametros
        return `${super.toString()} 
        ${this._iDEmpleado} 
        ${this._sueldo}`;
        //llama la funcion nombreCompleto y concatena 
    }
}

class Cliente extends Persona { // clase hija
    static contadorClientes = 0; 
    constructor(nombre, apellido, edad, fecha_registro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fecha_registro= fecha_registro;
    }
    get idCliente(){
        return this._idCliente; 
    }
    get fecha_registro(){
        return this._fecha_registro; 
    }
    set fecha_registro(fecha_registro){
        this._fecha_registro=fecha_registro;
    }
    //Sobreescritura
    toString(){ //mismo nombre y mismos parametros
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fecha_registro}`;
        //llama la funcion nombreCompleto y concatena 
    }
}




let persona1 = new Persona('Mike', 'Rodriguez', '26');
console.log( persona1.toString()); 

let persona2 = new Persona('Gonzalo', 'Ramirez', '22');
console.log( persona2.toString()); 

let empleado1 = new Empleado('Karla', 'Gomez', '26', 34000); 
console.log( empleado1.toString());

let cliente1 = new Cliente('Emeregildo', 'Ramirez', '23', new Date()); 
console.log ( cliente1.toString()); 

