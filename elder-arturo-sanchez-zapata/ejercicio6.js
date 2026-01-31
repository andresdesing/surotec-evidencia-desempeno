function calcularImpuestos(ventas) {
    let totalImpuestos = 0;
    for (let i = 0; i < ventas.length; i++) {
        let iva = ventas[i] * 0.19;
        let retencion = 0;
        if (ventas[i] > 500000) {
            retencion = ventas[i] * 0.04;
        }
        totalImpuestos += iva + retencion;
    }
    return totalImpuestos;
}
export { calcularImpuestos };