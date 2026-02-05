export function actualizarPreciosProductos(productos) {
    let productosActualizados = [];

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];

        let nuevoPrecio = producto.precio;

        if (producto.stock < 5) {
            nuevoPrecio = producto.precio + (producto.precio * 0.15);
        } else if (producto.stock > 20) {
            nuevoPrecio = producto.precio - (producto.precio * 0.10);
        }

        productosActualizados.push({
            nombre: producto.nombre,
            stock: producto.stock,
            precio: nuevoPrecio
        });
    }

    return productosActualizados;
}
