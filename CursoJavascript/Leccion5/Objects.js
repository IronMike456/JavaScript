//Objetos
//sintaxis simplificada de objetos
let persona = { 
//propiedades
nombre: 'Juan',
apellido: 'Perez',
email: 'Juan@hotmail.com',
edad: 28, 
//metodo
nomrbeCompleto: function(){
    return this.nombre + " " + this.apellido
},

}
console.log(persona.apellido); 
console.log(persona.edad); 
console.log(persona.nomrbeCompleto()); 

let persona2 = new Object(); //objeto en memoria vacio

persona2.nombre = 'Carlos'; 
persona2.direccion = 'Irlandeses 10';
persona2.telefono = 5546455444;

console.log(persona['apellido']); // acceder a una propiedad 

//for in recorre todo el objeto
for(propiedad in persona){
    console.log(propiedad); //accede a las prpiedades
    console.log(persona[propiedad]); //accede a los datos de las propiedades
}

// formas de imrpimir objetos 
//concatenar cada valor de cada propiedad
console.log( persona.nombre + ', ' + persona.apellido )
//for in 
for( nombrePropiedad in persona){
console.log(persona[nombrePropiedad]);
}     
//sintacxis de object values
let personaArray = Object.values(persona); 
console.log(persona); 

//Metodo JSON
let personaString = JSON.stringify(persona); 

console.log(personaString);

/********************************************************* *///
//metodos get, set
let persona3 = { 
    //propiedades
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'Juan@hotmail.com',
    edad: 28, 
    idioma: 'ES',
    idioma2: 'us',
    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang( lang){
            this.idioma2 = lang.toUpperCase();
    },
    //metodo
    get nomrbeCompleto(){ //obtiene el nombre completo de las funcion
        return this.nombre + " " + this.apellido
    },
    
    }
console.log(persona3.nomrbeCompleto); //GET

console.log(persona3.lang);  //GET

persona3.lang = 'en';
console.log( persona3.idioma2); //SET

