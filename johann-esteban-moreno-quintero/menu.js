import { calcularDenominacionesBilletes } from './ejercicio1.js';

function menuPrincipal() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "--- TALLER DE LÓGICA DE PROGRAMACIÓN ---\n" +
            "1. Cajero de Denominaciones\n" +
            "0. Salir\n\n" + 
            "Seleccione una opción:"
        );

        if (opcion === null || opcion === '0') {
            continuar = false;
            alert("Saliendo del programa...");
            break;
        }

        switch (opcion) {
            case '1':
                const monto = prompt("Ingrese el monto a retirar (múltiplos de 10.000):");
                if (monto !== null) {
                    const resultado1 = calcularDenominacionesBilletes(Number(monto));
                    alert("Resultado:\n" + JSON.stringify(resultado1, null, 2));
                }
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    }
}
menuPrincipal();