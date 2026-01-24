import { ejercicio1 } from "./ejercicio1.js";

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            const monto = prompt("Cajero: Ingrese el monto a retirar (múltiplos de 10.000):");
            if (monto !== null) {
                const resultado = ejercicio1(Number(monto));
                alert(JSON.stringify(resultado, null, 2));
            }
            break;
        case "0":
            alert("Saliendo del programa...");
            return false;
        default:
            alert("Opción no válida.");
            break;
    }
    return true;
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        const opcion = prompt(
            "MENÚ PRINCIPAL - Seleccione un ejercicio:\n" +
            "1. Cajero de Denominaciones\n" +
            "0. Salir"
        );

        if (opcion === null || opcion === "0") {
            alert("Programa finalizado.");
            continuar = false;
        } else {
            continuar = ejecutarOpcion(opcion);
        }
    }
}

iniciarPrograma();