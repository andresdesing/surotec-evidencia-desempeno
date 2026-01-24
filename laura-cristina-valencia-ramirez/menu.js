import { cajeroAutomatico } from './ejercicio1.js';
import { inventarioConPreciosDinamicos } from './ejercicio2.js';
import { sistemaDeBecas } from './ejercicio3.js';

function iniciarMenu() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(`
--- MENÚ PRINCIPAL ---
1. Ejercicio 1: Cajero Automático
2. Ejercicio 2: Tienda Interactiva
3. Ejercicio 3: Sistema de Becas
0. Salir

Seleccione una opción:`);

        if (opcion === '0' || opcion === null) {
            continuar = false;
            break;
        }

        if (opcion === '1') {
            let monto = parseInt(prompt("Ingrese monto a retirar:"));
            if (!isNaN(monto)) {
                alert(JSON.stringify(cajeroAutomatico(monto), null, 2));
            }

        } else if (opcion === '2') {
            let estanteria = [
                { nombre: "Arroz", stock: 10, precio: 1000 },
                { nombre: "Papa", stock: 25, precio: 1000 },
                { nombre: "Carne", stock: 6, precio: 5000 }
            ];

            let comprando = true;
            while (comprando) {
                estanteria = inventarioConPreciosDinamicos(estanteria);
                let textoProductos = estanteria.map((p, i) => `${i}. ${p.nombre} | Stock: ${p.stock} | Precio: $${p.precio}`).join("\n");
                
                let seleccion = prompt(`--- TIENDA ---\n${textoProductos}\n\nEscriba "x" para volver.`);
                
                if (seleccion === 'x' || seleccion === null) {
                    comprando = false;
                } else {
                    let index = parseInt(seleccion);
                    if (!isNaN(index) && estanteria[index]) {
                        let cantidad = parseInt(prompt(`¿Cantidad de ${estanteria[index].nombre}?`));
                        if (cantidad > 0 && cantidad <= estanteria[index].stock) {
                            estanteria[index].stock -= cantidad;
                            alert(`Compra exitosa. Nuevo stock: ${estanteria[index].stock}`);
                        } else {
                            alert("Stock insuficiente.");
                        }
                    }
                }
            }

        } else if (opcion === '3') {
            // --- LÓGICA EJERCICIO 3 ---
            let promedio = parseFloat(prompt("Ingrese el promedio del estudiante (0.0 - 5.0):"));
            let edad = parseInt(prompt("Ingrese la edad:"));
            let estrato = parseInt(prompt("Ingrese el estrato (1-6):"));

            if (!isNaN(promedio) && !isNaN(edad) && !isNaN(estrato)) {
                let estudiante = { promedio, edad, estrato };
                
                let tieneBeca = sistemaDeBecas(estudiante);

                if (tieneBeca) {
                    alert("¡FELICIDADES! El estudiante ES APTO para la beca.");
                } else {
                    alert("Lo sentimos. El estudiante NO CUMPLE los requisitos.");
                }
            } else {
                alert("Datos inválidos.");
            }
        }
    }
}

iniciarMenu();