let contadorConversionesRealizadas = 0;
export function ejercicio10(){

    const montoAConvertir = parseFloat(prompt("Ingrese el monto a convertir: "));
    const monedaOrigen = prompt("Ingrese moneda origen (COP, USD, EUR):").toUpperCase();
    const monedaDestino = prompt("Ingrese moneda destino (COP, USD, EUR):").toUpperCase();

    const tasasRespectoAlDolar = {
        USD: 1, 
        COP: 4000, 
        EUR: 0.92
    };
    if (!tasasRespectoAlDolar[monedaOrigen] || !tasasRespectoAlDolar[monedaDestino]) {
        alert("Moneda no soportada.");
        return null;
    }

    const montoEnDolares = montoAConvertir / tasasRespectoAlDolar[monedaOrigen];
    const montoFinalConvertido = montoEnDolares * tasasRespectoAlDolar[monedaDestino];

    contadorConversionesRealizadas++;

    const mensajeResultado = `Resultado: ${montoFinalConvertido.toFixed(2)} ${monedaDestino}. (Conversión #${contadorConversionesRealizadas})`;
    alert(mensajeResultado);

    return {
        valorConvertido: montoFinalConvertido,
        totalEjecuciones: contadorConversionesRealizadas
    };
}