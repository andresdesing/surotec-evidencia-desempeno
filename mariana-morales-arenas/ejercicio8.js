function estadisticasPuntaje(numeros){
    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    let suma = 0;
    let contador= 0;

    for (let numero of numeros){
        if (numero !== max && numero !== min){
            suma += numero;
            contador++;
        }
    }
    if (contador === 0){
        return 0;
    }
    return suma / contador;
}
module.exports = estadisticasPuntaje;
