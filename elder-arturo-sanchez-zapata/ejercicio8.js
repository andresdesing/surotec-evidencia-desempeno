function calcularPromedioEstadistico(puntos) {
    let maximo = Math.max(...puntos);
    let minimo = Math.min(...puntos);
    let suma = 0;
    for (let i = 0; i < puntos.length; i++) {
        suma += puntos[i];
    }
    let promedio = (suma - maximo - minimo) / (puntos.length - 2);
    return promedio;
}
export { calcularPromedioEstadistico };