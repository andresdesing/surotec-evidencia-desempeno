export function monitorearTransacciones(transacciones) {
    let sumaAnterior = 0;
    const resultados = [];

    transacciones.forEach((monto, index) => {
        if (index === 0) {
            // La primera transacción no tiene anteriores para comparar
            resultados.push({ monto, estado: "Normal" });
            sumaAnterior += monto;
        } else {
            const promedioAnterior = sumaAnterior / index;
            const limiteSospecha = promedioAnterior * 4; // 300% más es 4 veces el valor (100% + 300%)

            if (monto > limiteSospecha) {
                resultados.push({ monto, estado: "Sospechosa" });
            } else {
                resultados.push({ monto, estado: "Normal" });
            }
            sumaAnterior += monto;
        }
    });

    return resultados;
}