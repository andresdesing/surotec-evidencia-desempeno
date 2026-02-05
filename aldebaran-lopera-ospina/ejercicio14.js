
export function calcularDescuentoLealtad(compras, antiguedad) {
    let suma = 0;
    for (let compra of compras) {
        suma += compra;
    }
    
    const promedio = suma / compras.length;

    if (promedio > 100000 && antiguedad > 2) {
        return 25;
    } else {
        return 0;
    }
}