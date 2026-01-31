
export function monitorearTransacciones(transacciones) {
    let sospechosas = [];
    let sumaAcumulada = 0;

    for (let i = 0; i < transacciones.length; i++) {
        const montoActual = transacciones[i];

        if (i > 0) {
            const promedioAnterior = sumaAcumulada / i;
            
            const umbralLimite = promedioAnterior * 4;

            if (montoActual > umbralLimite) {
                sospechosas.push({
                    indice: i,
                    monto: montoActual,
                    promedioAlMomento: parseFloat(promedioAnterior.toFixed(2)),
                    estado: "Sospechosa"
                });
            }
        }

        sumaAcumulada += montoActual;
    }

    return sospechosas;
}