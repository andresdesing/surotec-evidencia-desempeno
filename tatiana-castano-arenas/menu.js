import { ejercicio1 } from "./ejercicio1.js";
import { aplicarLogicaPrecio } from "./ejercicio2.js";
import { evaluarBeca } from "./ejercicio3.js";

let inventario = [
    { nombre: "Teclado", stock: 6, precio: 100 },
    { nombre: "Mouse", stock: 22, precio: 50 },
    { nombre: "Monitor", stock: 10, precio: 200 }
];

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            const monto = prompt("Cajero: Ingrese el monto a retirar (múltiplos de 10.000):");
            if (monto !== null) {
                alert(JSON.stringify(ejercicio1(Number(monto)), null, 2));
            }
            break;
        case "2":
            let lista = inventario.map((p, i) => `${i}. ${p.nombre} (Stock: ${p.stock}, Precio: $${p.precio})`).join("\n");
            const index = prompt("Seleccione el producto que desea adquirir:\n" + lista);
            
            if (inventario[index]) {
                if (inventario[index].stock > 0) {
                    inventario[index].stock -= 1;
                    inventario[index] = aplicarLogicaPrecio(inventario[index]);
                    alert("Producto actualizado:\n" + JSON.stringify(inventario[index], null, 2));
                } else {
                    alert("Sin stock disponible.");
                }
            }
            break;
        case "3":
            const datosEstudiante = {
                promedio: Number(prompt("Ingrese el promedio del estudiante:")),
                edad: Number(prompt("Ingrese la edad del estudiante:")),
                estrato: Number(prompt("Ingrese el estrato del estudiante:"))
            };
            const resultadoBeca = evaluarBeca(datosEstudiante);
            alert(resultadoBeca ? "Beca OTORGADA" : "Beca NO otorgada");
            break;
        case "0":
            alert("Finalizando programa...");
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
            "Bienvenido al menú interactivo de la Tatis, por favor, selecciona un ejercicio:\n" +
            "1. Cajero Automático\n" +
            "2. Inventario Dinámico\n" +
            "3. Sistema de Becas\n" +
            "0. Salir"
        );

        if (opcion === null || opcion === "0") {
            continuar = false;
        } else {
            continuar = ejecutarOpcion(opcion);
        }
    }
}

iniciarPrograma();