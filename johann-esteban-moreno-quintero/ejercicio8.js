export const puntajesPrueba = [10, 50, 20, 30, 40, 100, 5];

export function calcularEstadisticasPuntaje(puntajes) {
    if (puntajes.length <= 2) {
        return 0;
    }

    let maximo = puntajes[0];
    let minimo = puntajes[0];
    let sumaTotal = 0;

    for (let i = 0; i < puntajes.length; i++) {
        if (puntajes[i] > maximo) {
            maximo = puntajes[i];
        }
        if (puntajes[i] < minimo) {
            minimo = puntajes[i];
        }
        sumaTotal += puntajes[i];
    }

    const sumaRestante = sumaTotal - maximo - minimo;
    const promedioRestante = sumaRestante / (puntajes.length - 2);

    return Number(promedioRestante.toFixed(2));
}