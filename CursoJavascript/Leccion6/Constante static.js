class Persona { // CLASE PADRE
    static contadorObjetosPersona = 0; //Atributo estatico
    
    static get Max_Obj(){ //constante static
        return 5; 
    } 

    constructor(nombre, apellido ){
        this._nombre = nombre;
        this._apellido = apellido; 
        this.idPersona = ++Persona.contadorObjetosPersona;//preincremento
        if( Persona.contadorObjetosPersona < Persona.Max_Obj){
            this.idPersona = ++Persona.contadorObjetosPersona;

        }
        else{
            console.log('Se ha superado el maximo de objetos permitidos')
        }
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
        return this.idPersona + ' ' + this._nombre + ' ' +  this._apellido; 
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
console.log( persona1.toString()); 
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1.toString()); 

let persona2 = new Persona('Karla', 'Ramirez')
console.log(persona2.toString()); 
console.log(Persona.contadorObjetosPersona);

console.log(Persona.Max_Obj);