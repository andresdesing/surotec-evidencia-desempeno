function pedirDatosConversion() {
    const montoConv = parseFloat(prompt("Ingrese el monto: "));
    const origen = prompt("Moneda origen (COP, USD, EUR): ").toUpperCase();
    const destino = prompt("Moneda destino (COP, USD, EUR): ").toUpperCase();

    if (isNaN(montoConv) || montoConv <= 0) {
        return null;
    }

    return { montoConv, origen, destino };
}



function crearConversor() {
    let contador = 0;

    const tasas = {
        COP: { USD: 0.00025, EUR: 0.00023 },
        USD: { COP: 4000, EUR: 0.92 },
        EUR: { COP: 4350, USD: 1.09 }
    };

    return function convertir(montoConv, origen, destino) {
    if (isNaN(montoConv) || montoConv <= 0) return null;
    if (origen === destino) {
        contador++;
        return { resultadoConv: montoConv, contador };
    }

    if (!tasas[origen] || !tasas[origen][destino]) {
        return null;
    }

    contador++;
    return {
        resultadoConv: montoConv * tasas[origen][destino],
        contador
    };
};

}

export default crearConversor;
export { pedirDatosConversion };

