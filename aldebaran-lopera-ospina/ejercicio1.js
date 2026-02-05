
export function cajeroAuto(monto) {

    if (monto <= 0 || monto % 10000 !== 0) {
        return "Error: El monto debe ser múltiplo de $10.000 y mayor a 0.";
    }

    const billetes = {
        '50000': 0,
        '20000': 0,
        '10000': 0
    };

    let resto = monto;

    if (resto >= 50000) {
        billetes['50000'] = Math.floor(resto / 50000);
        resto = resto % 50000;
    }

    if (resto >= 20000) {
        billetes['20000'] = Math.floor(resto / 20000);
        resto = resto % 20000;
    }

    if (resto >= 10000) {
        billetes['10000'] = Math.floor(resto / 10000);
        resto = resto % 10000;
    }

    return billetes;
}
