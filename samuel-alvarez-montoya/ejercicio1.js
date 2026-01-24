function calcularDenominaciones(monto) {
    if (monto % 10000 !== 0) {
        return "Error: el monto debe ser múltiplo de 10.000";
    }

    let billetes50000 = (monto - (monto % 50000)) / 50000;
    monto = monto % 50000;

    let billetes20000 = (monto - (monto % 20000)) / 20000;
    monto = monto % 20000;

    let billetes10000 = (monto - (monto % 10000)) / 10000;

    return {
        billetes50000: billetes50000,
        billetes20000: billetes20000,
        billetes10000: billetes10000
    };
}


