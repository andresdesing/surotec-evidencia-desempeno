export function ejercicio1() {
    const monto = prompt("Ingrese el monto a retirar (múltiplos de $10.000):");

    if (monto % 10000 !== 0) {
        const error = "El monto a retirar debe ser múltiplo de 10000.";
        alert(error);
        return error;
    }

    const billeteCincuenta = Math.floor(monto / 50000);
    let restante = monto % 50000;

    const billeteVeinte = Math.floor(restante / 20000);
    restante = restante % 20000;

    const billeteDiez = Math.floor(restante / 10000);

    const resultado = {
        billete50000: billeteCincuenta,
        billete20000: billeteVeinte,
        billete10000: billeteDiez
    };

    alert("Retiro exitoso");
    return resultado;
}