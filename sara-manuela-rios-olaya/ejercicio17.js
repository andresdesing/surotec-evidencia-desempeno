export function ejercicio17(){
    const historial = [100, 150, 200, 1000, 120];
    const transaccionesSospechosas = [];

    for(let i = 1; i < historial.length; i++) {
        const anteriores = historial.slice(0, i);
        const promedioTransacciones = anteriores.reduce((a, b) => a + b, 0) / anteriores.length;

        if(historial[i] > (promedioTransacciones * 4)){
            transaccionesSospechosas.push(historial[i]);
        }
    }
    if (transaccionesSospechosas.length > 0) {
        alert("Alerta: Se detectaron transacciones sospechosas por valores de: $" + transaccionesSospechosas.join(", $"));
    } else {
        alert("Monitoreo finalizado: No se encontraron transacciones sospechosas.");
    }
}