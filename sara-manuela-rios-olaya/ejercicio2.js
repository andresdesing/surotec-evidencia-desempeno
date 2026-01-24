export function ejercicio2(){
    const producto = [
        { nombre: "Monitor", stock: 3, precio: 500000 },
        { nombre: "Teclado", stock: 25, precio: 80000 },
        { nombre: "Mouse", stock: 10, precio: 45000 },
        { nombre: "Audífonos", stock: 2, precio: 120000 }
    ];

    const inventarioActualizado = producto.map(producto => {
        let nuevoPrecio = producto.precio;

        if (producto.stock < 5) {
            nuevoPrecio = producto.precio * 0.15;
        } else if (producto.stock > 20){
            nuevoPrecio = producto.precio -= producto.precio * 0.10;
        }
        return {
           nombre: producto.nombre,
           stock: producto.stock,
           precio: nuevoPrecio
        };
    });
    alert(JSON.stringify(inventarioActualizado, null, 2));
    return inventarioActualizado
}