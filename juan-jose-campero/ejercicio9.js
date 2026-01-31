function pedirDatosNomina() {
    let horasTrabajadas;
    let valorHora;

    while (true) {
        horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas en la semana:"));
        valorHora = parseFloat(prompt("Ingrese el valor de la hora trabajada:"));

        if (
            !isNaN(horasTrabajadas) && horasTrabajadas >= 0 &&
            !isNaN(valorHora) && valorHora > 0
        ) {
            break;
        }

        console.log("Datos inválidos. Intente nuevamente.");
    }

    return { horasTrabajadas, valorHora };
}



function calcularSalario(horasTrabajadas, valorHora) {
    if (
        typeof horasTrabajadas !== "number" ||
        typeof valorHora !== "number" ||
        isNaN(horasTrabajadas) ||
        isNaN(valorHora) ||
        horasTrabajadas < 0 ||
        valorHora <= 0
    ) {
        return "Datos inválidos";
    }

    let salario = 0;

    if (horasTrabajadas <= 40) {
        salario = horasTrabajadas * valorHora;
    } else if (horasTrabajadas <= 50) {
        const horasExtras = horasTrabajadas - 40;
        salario = (40 * valorHora) + (horasExtras * valorHora * 1.5);
    } else {
        const horasExtras = 10;
        const horasAdicionales = horasTrabajadas - 50;

        salario =
            (40 * valorHora) +
            (horasExtras * valorHora * 1.5) +
            (horasAdicionales * valorHora * 2);
    }

    return salario;
}


export default calcularSalario;
export { pedirDatosNomina };