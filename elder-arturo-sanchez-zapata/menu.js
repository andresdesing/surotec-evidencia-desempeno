import readline from 'readline';

import { calcularBilletes } from './ejercicio1.js';
import { actualizarPrecios } from './ejercicio2.js';
import { evaluarBeca } from './ejercicio3.js';
import { calcularTotalCarrito } from './ejercicio4.js';
import { calcularAsistencia } from './ejercicio5.js';
import { calcularImpuestos } from './ejercicio6.js';
import { validarPassword } from './ejercicio7.js';
import { calcularPromedioEstadistico } from './ejercicio8.js';
import { calcularNomina } from './ejercicio9.js';
import { convertirMoneda } from './ejercicio10.js';
import { calcularEstudiantesFuera } from './ejercicio11.js';
import { contarPalabrasProhibidas } from './ejercicio12.js';
import { monitorearTemperatura } from './ejercicio13.js';
import { calcularDescuentoLealtad } from './ejercicio14.js';
import { filtrarTareasUrgentes } from './ejercicio15.js';
import { calcularServicioAgua } from './ejercicio16.js';
import { monitorearTransacciones } from './ejercicio17.js';
import { validarPrestamo } from './ejercicio18.js';
import { planificarRuta } from './ejercicio19.js';
import { generarCSV } from './ejercicio20.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n--- MENÚ PRINCIPAL DE EJERCICIOS ---");
    for (let i = 1; i <= 20; i++) {
        console.log(`${i}. Ejercicio ${i}`);
    }
    console.log("0. Salir");

    rl.question("\nSeleccione una opción: ", (opcion) => {
        const opt = parseInt(opcion);

        if (opt === 0) {
            console.log("Saliendo del sistema...");
            rl.close();
            return;
        }

        switch (opt) {
            case 1:
                rl.question("Monto a retirar: ", (m) => {
                    console.log(calcularBilletes(parseInt(m)));
                    mostrarMenu();
                });
                break;
            case 2:
                console.log(actualizarPrecios([{ nombre: "Producto A", stock: 3, precio: 100 }]));
                mostrarMenu();
                break;
            case 3:
                console.log(evaluarBeca({ promedio: 4.6, edad: 20, estrato: 1 }));
                mostrarMenu();
                break;
            case 4:
                console.log(calcularTotalCarrito([{ categoria: "Electronica", precio: 100 }]));
                mostrarMenu();
                break;
            case 5:
                console.log(calcularAsistencia(["08:05", "08:20", "08:25"]));
                mostrarMenu();
                break;
            case 6:
                console.log(calcularImpuestos([600000, 100000]));
                mostrarMenu();
                break;
            case 7:
                rl.question("Clave a validar: ", (p) => {
                    console.log(validarPassword(p));
                    mostrarMenu();
                });
                break;
            case 8:
                console.log(calcularPromedioEstadistico([10, 20, 30, 40, 50]));
                mostrarMenu();
                break;
            case 9:
                console.log(calcularNomina(45, 10000));
                mostrarMenu();
                break;
            case 10:
                console.log(convertirMoneda(100, "USD", "COP"));
                mostrarMenu();
                break;
            case 11:
                console.log(calcularEstudiantesFuera(30, [10, 15, 10]));
                mostrarMenu();
                break;
            case 12:
                console.log(contarPalabrasProhibidas("No usar esto, ni aquello", ["esto", "aquello"]));
                mostrarMenu();
                break;
            case 13:
                console.log(monitorearTemperatura([36, 37, 38, 30]));
                mostrarMenu();
                break;
            case 14:
                console.log(calcularDescuentoLealtad([120000, 150000, 110000, 130000, 140000], 3));
                mostrarMenu();
                break;
            case 15:
                console.log(filtrarTareasUrgentes([{ prioridad: "alta", dias: 1 }]));
                mostrarMenu();
                break;
            case 16:
                console.log(calcularServicioAgua(20, 1));
                mostrarMenu();
                break;
            case 17:
                console.log(monitorearTransacciones([100, 150, 800]));
                mostrarMenu();
                break;
            case 18:
                console.log(validarPrestamo([{ multa: 5000, diasRetraso: 5 }]));
                mostrarMenu();
                break;
            case 19:
                console.log(planificarRuta([{ nombre: "A", distancia: 50 }, { nombre: "B", distancia: 160 }]));
                mostrarMenu();
                break;
            case 20:
                console.log(generarCSV([{ id: 1, nombre: "Juan", email: "j@mail.com" }]));
                mostrarMenu();
                break;
            default:
                console.log("Opción no válida.");
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();