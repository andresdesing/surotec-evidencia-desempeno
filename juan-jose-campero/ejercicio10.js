function pedirDatosConversion() {
    const montoConv = parseFloat(prompt("Ingrese el monto: "));
    const origen = prompt("Moneda origen (COP, USD, EUR): ").toUpperCase();
    const destino = prompt("Moneda destino (COP, USD, EUR): ").toUpperCase();

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
        if (origen === destino) {
            return montoConv;
        }

        if (!tasas[origen] || !tasas[origen][destino]) {
            return "Conversión no válida";
        }

        contador++;

        const resultadoConv = montoConv * tasas[origen][destino];
        return { resultadoConv, contador };
    };
}

export default crearConversor;
export { pedirDatosConversion };

