function pedirVentas() {
    const cantidadVentas = parseInt(prompt("Ingrese la cantidad de ventas realizadas:"));
    const ventas = [];

    if (isNaN(cantidadVentas) || cantidadVentas <= 0) {
        console.log("Cantidad de ventas inválida.");
        return ventas;
    }

    let i = 0;
    while (i < cantidadVentas) {
        const monto = parseFloat(prompt(`Ingrese el monto de la venta ${i + 1}:`));

        if (isNaN(monto) || monto <= 0) {
            console.log("Monto inválido. Ingrese un número mayor a 0.");
            continue;
        }

        ventas.push(monto);
        i++;
    }

    return ventas;
}


function calculoImpuesto(ventas) {
    if (!Array.isArray(ventas)) {
        return "Datos inválidos";
    }

    let totalImpuesto = 0;

    for (const venta of ventas) {
        if (typeof venta !== "number" || isNaN(venta) || venta <= 0) {
            return "Venta inválida en el registro";
        }

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