export function ejercicio6() {
    const listaVentasBrutas = [600000, 300000, 800000, 150000];
    const porcentajeIva = 0.19;
    const porcentajeRetencion = 0.04;
    const umbralRetencion = 500000;

    const totalImpuestosAcumulados = listaVentasBrutas.reduce((acumulado, ventaActual) => {
        const valorIva = ventaActual * porcentajeIva;
        let valorRetencion = 0;

        if (ventaActual > umbralRetencion) {
            valorRetencion = ventaActual * porcentajeRetencion;
        }

        return acumulado + valorIva + valorRetencion;
    }, 0);

    alert(`El total de impuestos calculados es: $${totalImpuestosAcumulados}`);
    return totalImpuestosAcumulados;
}