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
import { monitorearSensores } from "./ejercicio13.js";
import { calcularDescuentoLealtad } from "./ejercicio14.js";
import { filtrarTareasUrgentes } from "./ejercicio15.js";
import { calcularLiquidacionAgua } from "./ejercicio16.js";

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
            const montoC = prompt("Cajero: Ingrese monto:");
            if (montoC) alert(JSON.stringify(ejercicio1(Number(montoC)), null, 2));
            break;
        case "2":
            let listaI = inventario.map((p, i) => `${i}. ${p.nombre} (${p.stock})`).join("\n");
            const idxI = prompt("Venta:\n" + listaI);
            if (inventario[idxI] && inventario[idxI].stock > 0) {
                inventario[idxI].stock -= 1;
                inventario[idxI] = aplicarLogicaPrecio(inventario[idxI]);
                alert("Actualizado: " + JSON.stringify(inventario[idxI], null, 2));
            }
            break;
        case "3":
            const est = { promedio: Number(prompt("Promedio:")), edad: Number(prompt("Edad:")), estrato: Number(prompt("Estrato:")) };
            alert(evaluarBeca(est) ? "Beca OTORGADA" : "Beca NO otorgada");
            break;
        case "4":
            let shop = true;
            while (shop) {
                let lC = catalogo.map((p, i) => `${i}. ${p.nombre} ($${p.precio})`).join("\n");
                let sel = prompt("Carrito (F para finalizar):\n" + lC);
                if (sel?.toUpperCase() === "F") {
                    const res = calcularTotalCarrito(carritoActual);
                    alert(`Total: $${res.totalGeneral}`);
                    carritoActual = []; shop = false;
                } else if (catalogo[sel]) carritoActual.push(catalogo[sel]);
            }
            break;
        case "5":
            let nom = prompt("Nombre trabajador:");
            if (nom) {
                let hor = prompt("Hora (HH:MM):");
                if (!baseDatosAsistencia[nom]) baseDatosAsistencia[nom] = [];
                baseDatosAsistencia[nom].push(hor);
                alert(calcularAsistenciaEmpleado(nom, baseDatosAsistencia[nom]));
            }
            break;
        case "6":
            const vts = prompt("Ventas (coma):").split(",").map(Number);
            alert("Impuestos: $" + calcularImpuestosVentas(vts));
            break;
        case "7":
            alert("Requisitos: 8+ carac, 1 num, 1 especial.");
            const pw = prompt("Pass:");
            alert("Resultado: " + validarPassword(pw));
            break;
        case "8":
            const pts = prompt("Puntajes (coma):").split(",").map(Number);
            const res8 = calcularEstadisticas(pts);
            alert(typeof res8 === "string" ? res8 : `Promedio: ${res8.promedioRestante}`);
            break;
        case "9":
            alert("Salario: $" + calcularNomina(Number(prompt("Horas:")), Number(prompt("Valor:"))));
            break;
        case "10":
            const mon = Number(prompt("Monto:"));
            const res10 = convertirMoneda(mon, "USD", "COP");
            alert(`Total: ${res10.resultado} COP (Consultas: ${res10.totalConsultas})`);
            break;
        case "11":
            const cap = Number(prompt("Capacidad:"));
            const grs = prompt("Grupos (coma):").split(",").map(Number);
            alert("Fuera: " + calcularEstudiantesFuera(cap, grs));
            break;
        case "12":
            const txtP = "Este es un mensaje de SPAM. La oferta de SPAM es limitada.";
            const res12 = analizarPalabrasProhibidas(txtP, ["spam", "oferta"]);
            alert(`Análisis:\nTEXTO: "${txtP}"\nRESULTADO: ${JSON.stringify(res12, null, 2)}`);
            break;
        case "13":
            const entradaTemp = prompt("Temperaturas (ej: 32,36,37,38,30):");
            if (entradaTemp) {
                const arrTemp = entradaTemp.split(",").map(Number);
                alert("Estado: " + monitorearSensores(arrTemp));
            }
            break;
        case "14":
            const cP = { compras: [120000, 95000, 150000, 80000, 110000], años: 3 };
            const cN = { compras: [50000, 40000, 30000, 60000, 20000], años: 1 };
            alert(`CLIENTE 1 (3 años):\n${calcularDescuentoLealtad(cP.compras, cP.años)}\n\nCLIENTE 2 (1 año):\n${calcularDescuentoLealtad(cN.compras, cN.años)}`);
            break;
        case "15":
            const listaTareas = [
                { descripcion: "Corregir bug login", prioridad: "alta", dias: 1 },
                { descripcion: "Revisar correo", prioridad: "baja", dias: 0 },
                { descripcion: "Preparar presentación", prioridad: "alta", dias: 5 },
                { descripcion: "Subir a producción", prioridad: "alta", dias: 0 }
            ];
            const urgentes = filtrarTareasUrgentes(listaTareas);
            alert("TAREAS URGENTES (Alta prioridad & < 2 días):\n" + JSON.stringify(urgentes, null, 2));
            break;
        case "16":
    
    const pruebasAgua = [
        { m3: 10, estrato: 1, desc: "Consumo Bajo (Rango 1) + Subsidio" },
        { m3: 25, estrato: 2, desc: "Consumo Medio (Rango 1 y 2) Sin Subsidio" },
        { m3: 35, estrato: 1, desc: "Consumo Alto (Rango 1, 2 y 3) + Subsidio" }
    ];

    let reporteAgua = "DETALLE DE LIQUIDACIÓN DE AGUA\n";
    reporteAgua += "---------------------------------------\n";

    pruebasAgua.forEach((prueba, index) => {
        const valorFinal = calcularLiquidacionAgua(prueba.m3, prueba.estrato);
        
        reporteAgua += `PRUEBA ${index + 1}: ${prueba.desc}\n`;
        reporteAgua += `• Consumo Total: ${prueba.m3} m³\n`;
        reporteAgua += `• Estrato: ${prueba.estrato}\n`;
        
       
        if (prueba.m3 <= 15) {
            reporteAgua += `  -> Todo en Rango 1 ($1.000)\n`;
        } else if (prueba.m3 <= 30) {
            reporteAgua += `  -> 15m³ Rango 1 + ${prueba.m3 - 15}m³ Rango 2 ($1.500)\n`;
        } else {
            reporteAgua += `  -> 15m³ Rango 1 + 15m³ Rango 2 + ${prueba.m3 - 30}m³ Rango 3 ($2.500)\n`;
        }

        if (prueba.estrato === 1) {
            reporteAgua += `  -> Subsidio aplicado: -20%\n`;
        }

        reporteAgua += `TOTAL A PAGAR: $${valorFinal}\n`;
        reporteAgua += "---------------------------------------\n";
    });

    alert(reporteAgua);
    break;
    }
    return true;
}

function iniciarPrograma() {
    let loop = true;
    while (loop) {
        const sel = prompt(
            "--- EVALUACIÓN JAVASCRIPT ---\n" +
            "1. Cajero\n2. Inventario\n3. Becas\n4. Carrito\n5. Asistencia\n" +
            "6. Impuestos\n7. Passwords\n8. Estadísticas\n9. Nómina\n10. Moneda\n" +
            "11. Aula\n12. Palabras\n13. Sensores\n14. Lealtad\n15. Tareas\n16. Agua\n" +
            "0. Salir"
        );
        loop = (sel === "0" || sel === null) ? false : ejecutarOpcion(sel);
    }
}

iniciarPrograma();