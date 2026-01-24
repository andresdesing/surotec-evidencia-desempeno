function actualizaInventario(productos) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].cantidad < 5) {
            productos[i].precio *= 1.15;
        } else if (productos[i].cantidad > 20) {
            productos[i].precio *= 0.90;
        }
        
    }
    return productos;
}