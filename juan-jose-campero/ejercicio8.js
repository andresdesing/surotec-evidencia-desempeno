function pedirNumeros() {
    const cantidad = parseInt(prompt("¿Cuántos números desea ingresar? (mínimo 3)"));
    const numeros = [];

    for (let i = 0; i < cantidad; i++) {
        const num = parseFloat(prompt(`Ingrese el número ${i + 1}: `));
        numeros.push(num);
    }

    return numeros;
}

function calcularPromedioRestante(Numeros) {
    if (Numeros.length < 3) {
        return null;
    }

    let max = Numeros[0];
    let min = Numeros[0];
    let suma = 0;

    for (const num of Numeros) {
        if (num > max) max = num;
        if (num < min) min = num;
        suma += num;
    }

    const sumaRestante = suma - max - min;
    const promedio = sumaRestante / (Numeros.length - 2);

    return promedio;
}

export default calcularPromedioRestante;
export { pedirNumeros };