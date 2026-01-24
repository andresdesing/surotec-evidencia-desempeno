export function ejercicio9(){
    const horasTrabajadas = parseInt(prompt("Ingresar el total de horas trabajadas: "));
    const valorHoraNormal = parseFloat(prompt("Ingrese el valor de la hora normal"));

    let salarioTotalNeto = 0; 

    if (horasTrabajadas <= 40) {
        salarioTotalNeto = horasTrabajadas * valorHoraNormal; 
    } else if (horasTrabajadas <= 50){
        const horasNormales = 40; 
        const horasRecargoCincuenta = horasTrabajadas - 40;

        salarioTotalNeto = (horasNormales * valorHoraNormal) + (horasRecargoCincuenta * valorHoraNormal * 1.5);
    } else {
        const horasNormales = 40;
        const horasRecargoCincuenta = 10;
        const horasRecargoCien = horasTrabajadas - 50;

        salarioTotalNeto = (horasNormales * valorHoraNormal) + 
                           (horasRecargoCincuenta * valorHoraNormal * 1.5) + 
                           (horasRecargoCien * valorHoraNormal * 2.0);
    }

    alert(`El salario total neto calculado es: $${salarioTotalNeto.toLocaleString()}`);
    return salarioTotalNeto;
}