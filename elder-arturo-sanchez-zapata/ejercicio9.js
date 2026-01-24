function calcularNomina(horas, valorHora) {
    let salarioTotal = 0;
    if (horas <= 40) {
        salarioTotal = horas * valorHora;
    } else if (horas <= 50) {
        salarioTotal = (40 * valorHora) + ((horas - 40) * valorHora * 1.5);
    } else {
        salarioTotal = (40 * valorHora) + (10 * valorHora * 1.5) + ((horas - 50) * valorHora * 2);
    }
    return salarioTotal;
}
export { calcularNomina };