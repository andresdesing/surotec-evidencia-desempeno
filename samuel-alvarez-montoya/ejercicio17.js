export function detectarTransaccionSospechosa(transacciones) {
    
    for (let i = 0; i < transacciones.length; i++) {
        let suma = 0;
        let contador = 0;

        for (let j = 0; j < transacciones.length; j++) {
            if (i !== j) { 
                suma += transacciones[j];
                contador++;
            }
        }

        if (contador === 0) continue;

        let promedio = suma / contador;

        if (transacciones[i] > promedio * 4) { 
            return {
                monto: transacciones[i],
                estado: "Sospechosa"
            };
        }
    }

    return null;
}
