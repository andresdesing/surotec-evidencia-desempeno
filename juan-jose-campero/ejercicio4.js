function ingresoCarrito() {
    const carrito = [];

    const cantidad = parseInt(prompt("Ingrese la cantidad de productos electrónicos: "));
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad inválida.");
        return carrito;
    }

    for (let i = 0; i < cantidad; i++) {
        const nombre = prompt(`Nombre del producto ${i + 1}:`);
        let precio = parseFloat(prompt(`Precio del producto ${i + 1}:`));

        if (isNaN(precio) || precio <= 0) {
            console.log("Precio inválido, intente nuevamente.");
            i--;
            continue;
        }

        carrito.push({
            nombre,
            precio,
            tipo: "Electronica"
        });
    }

    return carrito;
}

function descuentoCarrito(carrito) {
    const electronicos = carrito.filter(p => p.tipo === "Electronica").length;
    const aplicarDescuento = electronicos > 3;

    let total = 0;

    for (const producto of carrito) {
        let precioFinal = producto.precio;

        if (aplicarDescuento && producto.tipo === "Electronica") {
            precioFinal *= 0.85;
        }

        total += precioFinal;
    }

    return total;
}

export default descuentoCarrito;
export { ingresoCarrito };