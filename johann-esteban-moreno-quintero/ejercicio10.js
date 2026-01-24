let contadorConsultas = 0;

export const tasasCambio = {
    USD: { EUR: 0.92, COP: 3900, USD: 1 },
    EUR: { USD: 1.09, COP: 4200, EUR: 1 },
    COP: { USD: 0.00026, EUR: 0.00024, COP: 1 }
};

export function convertirMoneda(monto, origen, destino) {
    contadorConsultas++;

    const tasa = tasasCambio[origen][destino];
    const valorConvertido = monto * tasa;

    return {
        valor: Number(valorConvertido.toFixed(2)),
        totalConsultas: contadorConsultas
    };
}