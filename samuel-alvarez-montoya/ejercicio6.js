export function calcularImpuestosVentas(ventas) {

    let totalImpuestos = 0;

    for (let i = 0; i < ventas.length; i++) {
        let venta = ventas[i];

        let iva = venta * 0.19;
        totalImpuestos = totalImpuestos + iva;

        if (venta > 500000) {
            let valorNeto = venta + iva;
            let retencionAgregada = valorNeto * 0.04;
            totalImpuestos = totalImpuestos + retencionAgregada;
        }
    }

    return totalImpuestos;
}
