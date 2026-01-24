function calcularSalario(horasTrabajadas, valorHora) {

    let salario = 0;

    if (horasTrabajadas <= 40) {
        salario = horasTrabajadas * valorHora;
    } else if (horasTrabajadas <= 50) {
        let horasExtra50 = horasTrabajadas - 40;

        salario = (40 * valorHora) + (horasExtra50 * valorHora * 1.5);
        
    } else {
        let horasExtra50 = 10;
        let horasExtra100 = horasTrabajadas - 50;

        salario =
            (40 * valorHora) +
            (horasExtra50 * valorHora * 1.5) +
            (horasExtra100 * valorHora * 2);
    }

    return salario;
}
