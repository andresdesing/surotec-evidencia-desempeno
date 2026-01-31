export function ejercicio8() {
    const listaPuntajes = [15, 80, 45, 95, 30, 10, 60];

    let puntajeMaximo = listaPuntajes[0];
    let puntajeMinimo = listaPuntajes[0];

    for (let indice = 0; indice < listaPuntajes.length; indice++) {
        const puntajeActual = listaPuntajes[indice];
        if (puntajeActual > puntajeMaximo) puntajeMaximo = puntajeActual;
        if (puntajeActual < puntajeMinimo) puntajeMinimo = puntajeActual;
    }

    const sumaPuntajesTotales = listaPuntajes.reduce((acumulador, puntaje) => acumulador + puntaje, 0);
    const promedioFinal = (sumaPuntajesTotales - puntajeMaximo - puntajeMinimo) / (listaPuntajes.length - 2);

    alert(`Puntaje Máximo: ${puntajeMaximo}\nPuntaje Mínimo: ${puntajeMinimo}\nPromedio Restante: ${promedioFinal.toFixed(2)}`);

    return {
        maximo: puntajeMaximo,
        minimo: puntajeMinimo,
        promedioRestante: promedioFinal
    };
}