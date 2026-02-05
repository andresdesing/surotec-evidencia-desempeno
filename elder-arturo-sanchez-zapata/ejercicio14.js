function calcularDescuentoLealtad(compras, antiguedad) {
    let suma = 0;
    for (let i = 0; i < compras.length; i++) {
        suma += compras[i];
    }
    let promedio = suma / compras.length;

    if (promedio > 100000 && antiguedad > 2) {
        return "Descuento del 25% para la próxima compra";
    }
    return "No aplica para descuento";
}
export { calcularDescuentoLealtad };