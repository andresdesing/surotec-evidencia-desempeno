let cantidadConversiones = 0

function convertirMoneda(monto, monedaOrigen, monedaDestino) {
    cantidadConversiones++
    
    const tasaUSD = 4000
    const tasaEUR = 4250
    let valorEnCOP = 0

    if (monedaOrigen === 'COP') {
        valorEnCOP = monto
    } else if (monedaOrigen === 'USD') {
        valorEnCOP = monto * tasaUSD
    } else if (monedaOrigen === 'EUR') {
        valorEnCOP = monto * tasaEUR
    }

    let resultadoFinal = 0

    if (monedaDestino === 'COP') {
        resultadoFinal = valorEnCOP
    } else if (monedaDestino === 'USD') {
        resultadoFinal = valorEnCOP / tasaUSD
    } else if (monedaDestino === 'EUR') {
        resultadoFinal = valorEnCOP / tasaEUR
    }

    return resultadoFinal
}