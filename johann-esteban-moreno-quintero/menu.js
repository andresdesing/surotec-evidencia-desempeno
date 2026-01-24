import { calcularDenominacionesBilletes } from './ejercicio1.js';
import { actualizarPreciosInventario } from './ejercicio2.js';

function menuPrincipal() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "--- TALLER DE LÓGICA DE PROGRAMACIÓN ---\n" +
            "1. Cajero de Denominaciones\n" +
            "2. Actualizar precios\n" +
            "0. Salir\n" +
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
           

            case '2':

                let nombre = prompt("Ingrese el nombre del producto:", "Laptop");
                let stock = parseInt(prompt(`Ingrese el stock para ${nombre}:`, "3"));
                let precio = parseFloat(prompt(`Ingrese el precio para ${nombre}:`, "1000000"));

                const productosUsuario = [{ nombre, stock, precio }];

                console.log("Datos originales:", productosUsuario);

                const resultado2 = actualizarPreciosInventario(productosUsuario);

                alert(
                    `Resultado para ${nombre}:\n` +
                    `Stock: ${stock}\n` +
                    `Precio Original: ${precio}\n` +
                    `Precio Final (ajustado): ${resultado2[0].precio}`
                );

                console.table(resultado2);
                break;
                default: alert("Opción no válida.");
                break;
        }


    }
}
menuPrincipal();