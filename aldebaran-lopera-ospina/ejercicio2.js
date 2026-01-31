
export function ajustarPrecios(inventario) {

    if (!Array.isArray(inventario)) {
        return "Error: La entrada debe ser un arreglo de productos.";
    }


    const inventarioActualizado = inventario.map(producto => {
        let nuevoPrecio = producto.precio;


        if (producto.stock < 5) {

            nuevoPrecio = producto.precio * 1.15;
        } else if (producto.stock > 20) {

            nuevoPrecio = producto.precio * 0.90;
        }

        return {
            nombre: producto.nombre,
            stock: producto.stock,
            precio: parseFloat(nuevoPrecio.toFixed(2))
        };
    });

    return inventarioActualizado;
}

