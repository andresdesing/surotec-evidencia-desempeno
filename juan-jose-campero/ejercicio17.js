function pedirTransacciones() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Cantidad de transacciones: "));
    } while (isNaN(cantidad) || cantidad < 1);

    const transacciones = [];

    for (let i = 0; i < cantidad; i++) {
        let monto;
        do {
            monto = parseFloat(prompt(`Transacción ${i + 1}: `));
        } while (isNaN(monto) || monto <= 0);

        transacciones.push(monto);
    }

    return transacciones;
}


function monitorearTransacciones(transacciones) {
    if (transacciones.length < 2) {
        return "Sin anomalías";
    }

    let suma = transacciones[0];
    let cantidad = 1;

    for (let i = 1; i < transacciones.length; i++) {
        const promedio = suma / cantidad;

        if (transacciones[i] > promedio * 4) {
            return {
                monto: transacciones[i],
                estado: "Sospechosa"
            };
        }

        suma += transacciones[i];
        cantidad++;
    }

    return "Sin anomalías";
}

export default monitorearTransacciones;
export { pedirTransacciones };