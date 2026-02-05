function monitorearTransacciones(historial) {
    let sospechosas = [];
    let suma = 0;

    for (let i = 0; i < historial.length; i++) {
        let promedioAnterior = i === 0 ? historial[0] : suma / i;

        if (i > 0 && historial[i] > (promedioAnterior * 3)) {
            sospechosas.push({
                monto: historial[i],
                estado: "Sospechosa"
            });
        }
        suma += historial[i];
    }

    return sospechosas;
}

export { monitorearTransacciones };