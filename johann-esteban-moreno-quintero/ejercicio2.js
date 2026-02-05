export function actualizarPreciosInventario(productos) {
    return productos.map(producto => {
        let precioFinal = producto.precio;

        if (producto.stock < 5) {
            precioFinal = producto.precio * 1.15;
        } else if (producto.stock > 20) {
            precioFinal = producto.precio * 0.90;
        }

        return {
            ...producto,
            precio: Number(precioFinal.toFixed(2))
        };
    });
}