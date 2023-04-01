let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': '+ this.nombre + ' '+ this.apellido + ', '+ tel;
    }
    
    }
    let persona2 = {
        nombre: 'Carlos',
        apellido: 'Lara',
        
    }

    let arreglo = ['ing', '55445444'];
    console.log(persona1.nombreCompleto.apply( persona2, arreglo ));