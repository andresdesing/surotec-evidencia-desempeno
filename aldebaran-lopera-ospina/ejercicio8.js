
export function calcularEstadisticas(puntajes) {

    if (puntajes.length < 3) {
        return "Error: Se necesitan mínimo 3 puntajes para realizar el cálculo.";
    }


    const ordenados = [...puntajes].sort((a, b) => a - b);

    const min = ordenados.shift();
    const max = ordenados.pop();

    let suma = 0;
    for (let numero of ordenados) {
        suma += numero;
    }

    const promedio = suma / ordenados.length;

    return promedio;
}