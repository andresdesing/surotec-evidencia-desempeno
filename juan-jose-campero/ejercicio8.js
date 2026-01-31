function pedirNumeros() {
    const cantidad = parseInt(prompt("¿Cuántos números desea ingresar? (mínimo 3)"));
    const numeros = [];

    if (isNaN(cantidad) || cantidad < 3) {
        console.log("Debe ingresar al menos 3 números.");
        return numeros;
    }

    let i = 0;
    while (i < cantidad) {
        const num = parseFloat(prompt(`Ingrese el número ${i + 1}: `));

        if (isNaN(num)) {
            console.log("Número inválido. Intente de nuevo.");
            continue;
        }

        numeros.push(num);
        i++;
    }

    return numeros;
}

function calcularPromedioRestante(numeros) {
    if (!Array.isArray(numeros) || numeros.length < 3) {
        return "Datos inválidos";
    }

    let max = -Infinity;
    let min = Infinity;
    let suma = 0;

    for (const num of numeros) {
        if (typeof num !== "number" || isNaN(num)) {
            return "Número inválido en el arreglo";
        }

        if (num > max) max = num;
        if (num < min) min = num;
        suma += num;
    }

    const sumaRestante = suma - max - min;
    return sumaRestante / (numeros.length - 2);
}


export default calcularPromedioRestante;
export { pedirNumeros };