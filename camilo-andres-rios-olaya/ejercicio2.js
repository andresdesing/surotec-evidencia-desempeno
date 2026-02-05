function gestionarPreciosInventario(productos) {
    const inventarioActualizado = productos.map(producto => {
        let nuevoPrecio = producto.precio

        if (producto.stock < 5) {
            nuevoPrecio = producto.precio * 1.15
        } else if (producto.stock > 20) {
            nuevoPrecio = producto.precio * 0.90
        }

        return {
            nombre: producto.nombre,
            stock: producto.stock,
            precio: nuevoPrecio
        }
    })

    return inventarioActualizado
}