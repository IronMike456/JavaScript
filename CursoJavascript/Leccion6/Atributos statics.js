class Persona { // CLASE PADRE
    static contadorObjetosPersona =0; //Atributo estatico
    email = 'Valor default email'; 
    constructor(nombre, apellido ){
        this._nombre = nombre;
        this._apellido = apellido; 
        Persona.contadorObjetosPersona++; 
        console.log('Se incrementa contador: ' + Persona.contadorObjetosPersona);//no se accede con this al atributo estatico si con la misma clase

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
    //SOBRESCRIBIENDO EL METODO DE LA CLASE PADRE (OBJETC)
    toString(){
        //Se aplica polimorfismo 
        return this.nombreCompleto(); 
    }
    static saludar(){
        console.log('Saludos desde el metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre+' '+ persona.apellido);
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
let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.toString()); //SE CORRE LA CLASE PADRE
/** sobre escritura  */
let empleado1 = new Empleado('Mike', 'Rodriguez', 'IT') //referencia a clase hija

console.log(empleado1.nombreCompleto()); 
console.log(empleado1.toString()); //se corre la clase hija --> polimorfismo

//persona1.saludar();no es posible relacionar objetos con metodos statics

Persona.saludar();
Persona.saludar2(persona1); 
Empleado.saludar();

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona); //Clase padre

console.log(Empleado.contadorObjetosPersona); //Clase hija

console.log(persona1.email);
console.log(empleado1.email);