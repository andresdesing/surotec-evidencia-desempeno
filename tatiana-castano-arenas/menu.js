import { ejercicio1 } from "./ejercicio1.js";
import { aplicarLogicaPrecio } from "./ejercicio2.js";
import { evaluarBeca } from "./ejercicio3.js";
import { calcularTotalCarrito } from "./ejercicio4.js";
import { calcularAsistenciaEmpleado } from "./ejercicio5.js";
import { calcularImpuestosVentas } from "./ejercicio6.js";
import { validarPassword } from "./ejercicio7.js";
import { calcularEstadisticas } from "./ejercicio8.js";
import { calcularNomina } from "./ejercicio9.js";
import { convertirMoneda } from "./ejercicio10.js";
import { calcularEstudiantesFuera } from "./ejercicio11.js";
import { analizarPalabrasProhibidas } from "./ejercicio12.js";

const inventario = [
    { nombre: "Teclado", stock: 6, precio: 100 },
    { nombre: "Mouse", stock: 22, precio: 50 },
    { nombre: "Monitor", stock: 10, precio: 200 }
];

const catalogo = [
    { nombre: "Laptop", categoria: "Electronica", precio: 1000 },
    { nombre: "Celular", categoria: "Electronica", precio: 500 },
    { nombre: "Silla", categoria: "Muebles", precio: 150 }
];

const baseDatosAsistencia = {};
let carritoActual = [];

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            const montoC = prompt("Cajero: Ingrese monto a retirar:");
            if (montoC) alert(JSON.stringify(ejercicio1(Number(montoC)), null, 2));
            break;

        case "2":
            let listaI = inventario.map((p, i) => `${i}. ${p.nombre} (Stock: ${p.stock})`).join("\n");
            const idxI = prompt("Venta de inventario:\n" + listaI);
            if (inventario[idxI] && inventario[idxI].stock > 0) {
                inventario[idxI].stock -= 1;
                inventario[idxI] = aplicarLogicaPrecio(inventario[idxI]);
                alert("Producto actualizado: " + JSON.stringify(inventario[idxI], null, 2));
            } else {
                alert("Producto no válido o sin stock.");
            }
            break;

        case "3":
            const est = {
                promedio: Number(prompt("Promedio:")),
                edad: Number(prompt("Edad:")),
                estrato: Number(prompt("Estrato:"))
            };
            alert(evaluarBeca(est) ? "Beca OTORGADA" : "Beca NO otorgada");
            break;

        case "4":
            let comprando = true;
            while (comprando) {
                let listaC = catalogo.map((p, i) => `${i}. ${p.nombre} ($${p.precio})`).join("\n");
                let sel = prompt("Añadir al carrito o 'F' para finalizar:\n" + listaC);
                if (sel?.toUpperCase() === "F") {
                    const res = calcularTotalCarrito(carritoActual);
                    alert(`Total Final: $${res.totalGeneral}\n¿Descuento aplicado?: ${res.descuentoAplicado ? "SÍ" : "NO"}`);
                    carritoActual = [];
                    comprando = false;
                } else if (catalogo[sel]) {
                    carritoActual.push(catalogo[sel]);
                    alert("Agregado: " + catalogo[sel].nombre);
                }
            }
            break;

        case "5":
            let nombreE = prompt("Nombre del trabajador:");
            if (nombreE) {
                let horaL = prompt(`Hora de llegada para ${nombreE} (HH:MM):`);
                if (/^\d{2}:\d{2}$/.test(horaL)) {
                    if (!baseDatosAsistencia[nombreE]) baseDatosAsistencia[nombreE] = [];
                    baseDatosAsistencia[nombreE].push(horaL);
                    alert(calcularAsistenciaEmpleado(nombreE, baseDatosAsistencia[nombreE]));
                }
            }
            break;

        case "6":
            const vts = prompt("Ingrese ventas brutas separadas por coma (ej: 100000,600000):");
            if (vts) {
                const arrVts = vts.split(",").map(Number);
                alert("Total Impuestos (IVA + Retenciones): $" + calcularImpuestosVentas(arrVts));
            }
            break;

        case "7":
            alert("Requisitos: Mínimo 8 caracteres, 1 número y 1 carácter especial.");
            const pw = prompt("Ingrese contraseña:");
            if (pw) alert("Resultado: Contraseña " + validarPassword(pw));
            break;

        case "8":
            const pts = prompt("Ingrese puntajes separados por coma:");
            if (pts) {
                const arrPts = pts.split(",").map(Number);
                const res8 = calcularEstadisticas(arrPts);
                alert(typeof res8 === "string" ? res8 : `Promedio (excluyendo extremos): ${res8.promedioRestante}`);
            }
            break;

        case "9":
            const hrs = Number(prompt("Horas trabajadas:"));
            const val = Number(prompt("Valor hora normal:"));
            alert("Salario Neto: $" + calcularNomina(hrs, val));
            break;

        case "10":
            const mon = Number(prompt("Monto a convertir:"));
            const ori = prompt("Origen (USD, EUR, COP):").toUpperCase();
            const des = prompt("Destino (USD, EUR, COP):").toUpperCase();
            const res10 = convertirMoneda(mon, ori, des);
            alert(`Resultado: ${res10.resultado} ${des}\nConsultas realizadas: ${res10.totalConsultas}`);
            break;

        case "11":
            const cap = Number(prompt("Capacidad del aula:"));
            const grs = prompt("Tamaños de grupos separados por coma:").split(",").map(Number);
            alert("Estudiantes que quedaron fuera: " + calcularEstudiantesFuera(cap, grs));
            break;

        case "12":
    const textoAnalizar = "Este es un mensaje de SPAM. La oferta de SPAM es limitada, aprovecha la oferta.";
    const palabrasABuscar = ["spam", "oferta"];
    const resultadoFrecuencia = analizarPalabrasProhibidas(textoAnalizar, palabrasABuscar);

    // Construimos un mensaje más descriptivo para la alerta
    const mensajeAlerta = `Análisis de Texto Hardcoded:
---------------------------------------
TEXTO: "${textoAnalizar}"
PALABRAS PROHIBIDAS: [${palabrasABuscar.join(", ")}]
---------------------------------------
RESULTADO:
${JSON.stringify(resultadoFrecuencia, null, 2)}`;

    alert(mensajeAlerta);
    break;
    }
    return true;
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        const seleccion = prompt(
            "--- EVALUACIÓN JAVASCRIPT ---\n" +
            "1. Cajero Automático\n" +
            "2. Inventario Dinámico\n" +
            "3. Sistema de Becas\n" +
            "4. Carrito de Compras\n" +
            "5. Control de Asistencia\n" +
            "6. Impuestos de Ventas\n" +
            "7. Validador de Passwords\n" +
            "8. Estadísticas de Puntaje\n" +
            "9. Nómina con Recargos\n" +
            "10. Conversor de Moneda\n" +
            "11. Capacidad de Aula\n" +
            "12. Palabras Prohibidas\n" +
            "0. Salir\n\n" +
            "Seleccione una opción:"
        );
        continuar = (seleccion === "0" || seleccion === null) ? false : ejecutarOpcion(seleccion);
    }
}

iniciarPrograma();