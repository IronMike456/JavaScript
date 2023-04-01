//objeto (propiedades y metodos)
//referencia a un objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'


}

function cambiarValorObjeto(p1){
    p1.nombre ='Miguel';
    p1.apellido = 'Rodriguez'; 

}
//paso por referencia
cambiarValorObjeto(persona); 
console.log(persona); 