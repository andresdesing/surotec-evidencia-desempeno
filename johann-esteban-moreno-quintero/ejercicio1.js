export function calcularDenominacionesBilletes(monto) {
    if (monto % 10000 !== 0) {
        return "Error: El monto debe ser múltiplo de 10.000";
    }
    let saldo = monto;
    const billetes50000 = Math.floor(saldo / 50000);
    saldo %= 50000;
    const billetes20000 = Math.floor(saldo / 20000);
    saldo %= 20000;
    const billetes10000 = Math.floor(saldo / 10000);

    return { billetes50000, billetes20000, billetes10000 };
}