function pedirVentas() {
    const cantidadVentas = parseInt(prompt("Ingrese la cantidad de ventas realizadas:"));
    const ventas = [];

    for (let i = 0; i < cantidadVentas; i++) {
        const monto = parseFloat(prompt(`Ingrese el monto de la venta ${i + 1}:`));

        ventas.push(monto);
    }

    return ventas;
}


function calculoImpuesto(ventas) {
    let totalImpuesto = 0;

    for (const venta of ventas) {
       const iva = venta * 0.19;
       let retencion = 0;

         if (venta > 500000) {
            const neto = venta + iva;
            retencion = neto * 0.04;
        }

        totalImpuesto += iva - retencion;
    }
    return totalImpuesto;
}

export default calculoImpuesto;
export { pedirVentas };