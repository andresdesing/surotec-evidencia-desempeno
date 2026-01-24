descuentoCarrito(productos); {
    const cantidadDigital = productos.filter(p => p.tipo === 'digital').length;

    const aplicarDescuento = cantidadDigital >= 3;

    let total = 0;
    for (const producto of productos) {
        let precioFinal = producto.precio;

        if (aplicarDescuento && producto.tipo === 'digital') {
            precioFinal *= 0.8; 
        }
        total += precioFinal;
    }

    return total;
}

export default descuentoCarrito;