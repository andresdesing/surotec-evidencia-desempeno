function calcularBilletes(monto) {
    if (monto % 10000 !== 0) {
        return "Error: El monto debe ser múltiplo de 10.000";
    }
    let billetes50 = Math.floor(monto / 50000);
    monto = monto % 50000;
    let billetes20 = Math.floor(monto / 20000);
    monto = monto % 20000;
    let billetes10 = Math.floor(monto / 10000);
    return {
        billetes50: billetes50,
        billetes20: billetes20,
        billetes10: billetes10
    };
}
export { calcularBilletes };