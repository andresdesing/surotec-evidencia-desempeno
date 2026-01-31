function calcularTotalCarrito(productos) {
    let contadorElectronica = 0;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria === "Electronica") {
            contadorElectronica++;
        }
    }
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        let precioFinal = productos[i].precio;
        if (contadorElectronica > 3 && productos[i].categoria === "Electronica") {
            precioFinal = precioFinal * 0.85;
        }
        total = total + precioFinal;
    }
    return total;
}
export { calcularTotalCarrito };