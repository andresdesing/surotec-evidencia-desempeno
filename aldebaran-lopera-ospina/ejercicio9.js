
export function calcularNomina(horas, valorHora) {
    let totalPagar = 0;

    if (horas <= 40) {
        totalPagar = horas * valorHora;
    } 
    
    else if (horas <= 50) {
        const pagoNormal = 40 * valorHora;
        
        const horasExtra = horas - 40;
        const pagoExtra = horasExtra * (valorHora * 1.5);

        totalPagar = pagoNormal + pagoExtra;
    } 
    
    else {
        const pagoNormal = 40 * valorHora;

        const pagoExtraMedia = 10 * (valorHora * 1.5);

        const horasExtraDoble = horas - 50;
        const pagoExtraDoble = horasExtraDoble * (valorHora * 2);

        totalPagar = pagoNormal + pagoExtraMedia + pagoExtraDoble;
    }

    return totalPagar;
}