let persona1 = {
nombre: 'Juan',
apellido: 'Perez',
nombreCompleto: function(){
    return this.nombre + ' '+ this.apellido
}

}

let persona2 = {
nombre: 'Carlos',
apellido: 'Lara',

}
//Uso call para usar el metodo persona1.nombreCompleto con los datos de persona2

console.log(persona1.nombreCompleto.call(persona2)) ;

//paso por argumento call

let persona3 = {
    nombre: 'Mike',
    apellido: 'Rodriguez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': '+this.nombre + ' '+ this.apellido + ', '+tel;
    }
}

console.log(persona3.nombreCompleto.call(persona3, 'Ing', '3323445'));