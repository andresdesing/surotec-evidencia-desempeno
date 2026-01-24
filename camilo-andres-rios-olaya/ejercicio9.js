function calcularNomina(horasTrabajadas, valorHora) {
    let salarioTotal = 0

    if (horasTrabajadas <= 40) {
        salarioTotal = horasTrabajadas * valorHora
    } else if (horasTrabajadas <= 50) {
        const horasExtras = horasTrabajadas - 40
        salarioTotal = (40 * valorHora) + (horasExtras * valorHora * 1.5)
    } else {
        const horasDobles = horasTrabajadas - 50
        const pagoPrimeras40 = 40 * valorHora
        const pagoSiguientes10 = 10 * valorHora * 1.5
        const pagoRestantes = horasDobles * valorHora * 2
        
        salarioTotal = pagoPrimeras40 + pagoSiguientes10 + pagoRestantes
    }

    return salarioTotal
}