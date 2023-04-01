class Producto  {
    static contadorProductos = 0; 
    constructor(nombre, precio){    
        this._idProducto = ++Producto.contadorProductos; 
        this._nombre = nombre; 
        this._precio = precio; 

    }
    get idProducto(){
        return this._idProducto; 
    }
    get nombre(){
        return this._nombre; 
    }
    set nombre(nombre){
        this._nombre = nombre; 
    }
    get precio (){
        return this._precio;
    }
    set precio (precio){
        this._precio = precio; 
    }
    toString(){
        return `idProducto: ${this._idProducto} 
                Nombre: ${this._nombre},
                Precio: $${this._precio}
        `
    }
}

class Orden {
    static contadorOrdenes = 0; 
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos  = []; //referencia a arreglo vacio para que pueda recibir elementos
        //this._contadorProductosAgregados = 0; 
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados] = producto;
        }
        else {
            console.log('No se puede agregar mas productos')
        }
    }
    calcularTOtal(){
        let totalVenta = 0; 
        for(let producto of this._productos){ //sintaxis simplificada for(variable que almacena referencias OF arreglo a iterar )
                totalVenta += producto.precio ; // 
        }
        return totalVenta; 

    }
    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += '\n' + producto.toString() + ' ';

        }
        console.log(` Orden: ${this.idOrden} Total: $${this.calcularTOtal()}, 
 Productos: ${productosOrden} `);


    }
}
let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 300); 

let orden1 = new Orden()
orden1.agregarProducto(producto1); //relacion dee agregacion
orden1.agregarProducto(producto2);

orden1.mostrarOrden(); 

let orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);

orden2.agregarProducto(producto1); 
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.mostrarOrden(); 