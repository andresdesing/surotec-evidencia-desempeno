let contadorConversiones = 0;
function convertirMoneda(monto, origen, destino) {
    const tasas = {
        USD: { COP: 4000, EUR: 0.92 },
        COP: { USD: 0.00025, EUR: 0.00023 },
        EUR: { USD: 1.09, COP: 4350 }
    };
    if (origen === destino) return monto;
    contadorConversiones++;
    let resultado = monto * tasas[origen][destino];
    return {
        valorConvertido: resultado,
        totalConversiones: contadorConversiones
    };
}
export { convertirMoneda };