export const ventasPrueba = [200000, 600000, 450000, 800000];

export function calcularImpuestosVentas(ventasBrutas) {
    let acumuladoImpuestos = 0;

    ventasBrutas.forEach(venta => {
        const iva = venta * 0.19;
        let retencion = 0;

        if (venta > 500000) {
            retencion = venta * 0.04;
        }

        acumuladoImpuestos += (iva + retencion);
    });

    return Number(acumuladoImpuestos.toFixed(2));
}