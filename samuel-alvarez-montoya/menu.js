import { calcularDenominaciones } from './ejercicio1.js';
import { actualizarPreciosProductos } from './ejercicio2.js';
import { tieneBeca } from './ejercicio3.js';
import { calcularTotalConDescuento } from './ejercicio4.js';
import { calcularSancionAsistencia } from './ejercicio5.js';
import { calcularImpuestosVentas } from './ejercicio6.js';
import { validarContrasena } from './ejercicio7.js';
import { calcularPromedioSinExtremos } from './ejercicio8.js';
import { calcularSalario } from './ejercicio9.js';
import { crearConversorMonedas } from './ejercicio10.js';
import { calcularEstudiantesFuera } from './ejercicio11.js';
import { contarPalabrasProhibidas } from './ejercicio12.js';
import { verificarSobrecalentamiento } from './ejercicio13.js';
import { calcularDescuentoLealtad } from './ejercicio14.js';
import { filtrarTareasUrgentes } from './ejercicio15.js';
import { calcularValorServicioAgua } from './ejercicio16.js';
import { detectarTransaccionSospechosa } from './ejercicio17.js';
import { validarPrestamoBiblioteca } from './ejercicio18.js';
import { planRutaEntrega } from './ejercicio19.js';
import { generarCsvUsuarios } from './ejercicio20.js';

function mostrarMenu() {
    return prompt(
        "Menú de ejercicios:\n" +
        "1. Cajero Denominaciones - Retiro\n" +
        "2. Inventario con Precios Dinámicos\n" +
        "3. Sistema Becas\n" +
        "4. Carrito con Descuento por Categoría\n" +
        "5. Control de Asistencia y Sanción\n" +
        "6. Impuestos de Ventas\n" +
        "7. Validador de Contraseñas\n" +
        "8. Estadísticas de Puntaje\n" +
        "9. Nómina con Recargos\n" +
        "10. Conversor con Registro\n" +
        "11. Capacidad de Aula\n" +
        "12. Análisis de Palabras Prohibidas\n" +
        "13. Alerta de Sensores\n" +
        "14. Descuento por Lealtad\n" +
        "15. Filtro de Tareas Urgentes\n" +
        "16. Liquidación de Servicios\n" +
        "17. Monitoreo de Transacciones\n" +
        "18. Restricción de Biblioteca\n" +
        "19. Plan de Ruta de Entrega\n" +
        "20. Generador de CSV\n" +
        "0. Salir\n\n" +
        "Seleccione una opción:"
    );
}

let opcion;

do {
    opcion = Number(mostrarMenu());

    switch (opcion) {

        case 1: {
            let monto = Number(prompt("Ingrese el monto:"));
            alert("Esto es lo que se le entrega:\n" + JSON.stringify(calcularDenominaciones(monto), null, 2));
            break;
        }

        case 2: {
            let productos = [];
            let cantidad = Number(prompt("¿Cuántos productos desea ingresar?"));

            for (let i = 0; i < cantidad; i++) {
                let nombre = prompt("Ingrese el nombre del producto " + (i + 1));
                let stock = Number(prompt("Ingrese el stock (cantidad) de " + nombre));
                let precio = Number(prompt("Ingrese el precio de " + nombre));
            productos.push({
                nombre: nombre,
                stock: stock,
                precio: precio
                });
            }

            let productosActualizados = actualizarPreciosProductos(productos);

            alert("Estos son los precios ahora (Ojo que está muy carero):\n\n" + JSON.stringify(productosActualizados, null, 2));
        break;
        }


        case 3: {
            let edad = Number(prompt("Ingrese la edad del estudiante"));
            let estrato = Number(prompt("Ingrese el estrato del estudiante"));
            let promedio = Number(prompt("Ingrese el promedio del estudiante"));

            let estudiante = {
                edad: edad,
                estrato: estrato,
                promedio: promedio
            };
        
            alert(tieneBeca(estudiante) ? "Aplica para la beca" : "No aplica para la beca...");
    
        break;
        }

        case 4: {
            let productos = [];
            let cantidad = Number(prompt("¿Cuántos productos desea ingresar?"));

            for (let i = 0; i < cantidad; i++) {
                let nombre = prompt("Ingrese el nombre del producto:" + (i + 1));
                let categoria = prompt("Ingrese la categoría del producto (Con la primera letra en mayúscula y sin tildes):" + (i + 1));
                let precio = Number(prompt("Ingrese el precio del producto:" + (i + 1)));

                productos.push({
                    nombre: nombre,
                    categoria: categoria,
                    precio: precio
                });
            }

            let total = calcularTotalConDescuento(productos);

            alert("El total de la compra con descuento (si aplica) es: $" + total);
            break;            
        }    

        case 5: {
            let horasLlegada = [];
            let cantidad = Number(prompt("¿Cuántos días desea ingresar la hora de llegada?"));

            for (let i = 0; i < cantidad; i++) {
                let hora = prompt("Ingrese la hora de llegada del día " + (i + 1) + " en formato HH:MM (ejemplo: 08:30)");
                horasLlegada.push(hora);
            }

            let resultado = calcularSancionAsistencia(horasLlegada);

            if (resultado === "Suspendido") {
                alert("Ha sido suspendido por llegadas graves. Coja oficio mejor.");
            } else {
                alert("El total de la sanción por retrasos es: $" + resultado);
            }
        
            break;
        }

        case 6: {
            let ventas = [];
            let cantidad = Number(prompt("¿Cuántas ventas desea ingresar?"));

            for (let i = 0; i < cantidad; i++) {
                let valor = Number(prompt("Ingrese el valor de la venta " + (i + 1)));
                ventas.push(valor);
            }

            let totalImpuestos = calcularImpuestosVentas(ventas);

            alert("El total de impuestos de las ventas ingresadas es: $" + totalImpuestos);
            break;
        }

        case 7: {
            let contrasena = prompt("Ingrese la contraseña a validar:");
            let resultado = validarContrasena(contrasena);
            alert("La contraseña ingresada es: " + resultado);
            break;
        }

        case 8: {
            let numeros = [];
            let cantidad = Number(prompt("¿Cuántos números desea ingresar? (mínimo que sean 3)"));

            if (cantidad < 3) {
                alert("Debe ingresar al menos 3 números para calcular el promedio sin extremos.");
                break;
            }

            for (let i = 0; i < cantidad; i++) {
                let valor = Number(prompt("Ingrese el número " + (i + 1)));
                numeros.push(valor);
            }

            let promedio = calcularPromedioSinExtremos(numeros);

            alert("El promedio sin contar el máximo y el mínimo es: " + promedio);
            break;
        }

        case 9: {
            let horasTrabajadas = Number(prompt("Ingrese la cantidad de horas trabajadas:"));
            let valorHora = Number(prompt("Ingrese el valor por hora:"));

            let salario = calcularSalario(horasTrabajadas, valorHora);

            alert("El salario total es: $" + salario + ". Ahora sí no se come más arroz con salsa.");
            break;
        }

        case 10: {
            const convertir = crearConversorMonedas();

            let monto = Number(prompt("Ingrese el monto a convertir:"));
            let monedaOrigen = prompt("Ingrese la moneda de origen (COP, USD, EUR):");
            let monedaDestino = prompt("Ingrese la moneda destino (COP, USD, EUR):");

            let resultado = convertir(monto, monedaOrigen.toUpperCase(), monedaDestino.toUpperCase());

            alert(monto + " " + monedaOrigen.toUpperCase() + " equivalen a " + resultado + " " + monedaDestino.toUpperCase());
            break;
        }

        case 11: {
            let capacidadMaxima = Number(prompt("Ingrese la capacidad máxima del salón:"));
            let cantidadGrupos = Number(prompt("¿Cuántos grupos de estudiantes desea ingresar?"));

            let gruposEstudiantes = [];
            for (let i = 0; i < cantidadGrupos; i++) {
                let estudiantes = Number(prompt("Ingrese la cantidad de estudiantes del grupo " + (i + 1)));
                gruposEstudiantes.push(estudiantes);
            }
        
            let estudiantesFuera = calcularEstudiantesFuera(capacidadMaxima, gruposEstudiantes);
        
            alert("Total de estudiantes que quedaron por fuera: " + estudiantesFuera + ". Estos se sentarán parados en las ventanas.");
            break;
        }

        case 12: {
            let texto = prompt("Ingrese el texto a analizar:");

            texto = texto.replace(/[^a-zA-Z0-9\s]/g, ""); //Regex, no me quite puntos por esto. Berna nos enseñó

            let cantidadProhibidas = Number(prompt("¿Cuántas palabras prohibidas desea ingresar?"));
            let palabrasProhibidas = [];

            for (let i = 0; i < cantidadProhibidas; i++) {
                let palabra = prompt("Ingrese la palabra prohibida " + (i + 1)).toLowerCase();
                palabrasProhibidas.push(palabra);
            }
        
            let resultado = contarPalabrasProhibidas(texto, palabrasProhibidas);
        
            let mensaje = "Conteo de palabras prohibidas:\n";
            for (let palabra in resultado) {
                mensaje += palabra + ": " + resultado[palabra] + "\n";
            }
        
            alert(mensaje);
            break;
        }

        case 13: {
            let temperaturas = [];

            for (let i = 0; i < 5; i++) {
                let temp = Number(prompt("Ingrese la temperatura " + (i + 1) + " en °C:"));
                temperaturas.push(temp);
            }
        
            let resultado = verificarSobrecalentamiento(temperaturas);
        
            alert("Resultado: " + resultado);
            break;
        }

        case 14: {
            let compras = [];

            for (let i = 0; i < 5; i++) {
                let valor = Number(prompt("Ingrese el valor de la compra " + (i + 1)));
                compras.push(valor);
            }
        
            let antiguedadAnios = Number(prompt("Ingrese la antigüedad del cliente en años:"));
        
            let descuento = calcularDescuentoLealtad(compras, antiguedadAnios);
        
            alert(descuento > 0 ? "El cliente aplica para el descuento de lealtad" : "El cliente no aplica para el descuento de lealtad, que no le compre más al otro de la esquina.");
            break;
        }

        case 15: {
            let tareas = [];
            let cantidad = Number(prompt("¿Cuántas tareas desea ingresar?"));

            for (let i = 0; i < cantidad; i++) {
                let nombre = prompt("Ingrese el nombre de la tarea " + (i + 1));
                let prioridad = prompt("Ingrese la prioridad de la tarea (alta, media, baja) " + (i + 1)).toLowerCase();
                let diasVencimiento = Number(prompt("Ingrese los días para vencimiento de la tarea " + (i + 1)));
            
                tareas.push({
                    nombre: nombre,
                    prioridad: prioridad,
                    diasVencimiento: diasVencimiento
                });
            }
        
            let tareasUrgentes = filtrarTareasUrgentes(tareas);
        
            if (tareasUrgentes.length > 0) {
                let mensaje = "Tareas urgentes:\n";
                for (let i = 0; i < tareasUrgentes.length; i++) {
                    mensaje += "- " + tareasUrgentes[i].nombre + " (vence en " + tareasUrgentes[i].diasVencimiento + " días)\n";
                }
                alert(mensaje);
            } else {
                alert("No hay tareas urgentes.");
            }
            break;
        }

        case 16: {
            let consumo = Number(prompt("Ingrese el consumo de agua en metros cúbicos:"));
            let estrato = Number(prompt("Ingrese el estrato del hogar (1, 2, 3, etc.):"));

            let total = calcularValorServicioAgua(consumo, estrato);

            alert("El valor total del servicio de agua es: $" + total);
            break;
        }

        case 17: {
            let transacciones = [];
            let cantidad = Number(prompt("¿Cuántas transacciones desea ingresar?"));

            for (let i = 0; i < cantidad; i++) {
                let monto = Number(prompt("Ingrese el monto de la transacción " + (i + 1)));
                transacciones.push(monto);
            }
        
            let resultado = detectarTransaccionSospechosa(transacciones);
        
            alert(resultado ? "Transacción sospechosa detectada:\nMonto: " + resultado.monto : "No se detectaron transacciones sospechosas.");
            break;
        }

        case 18: {
            let prestamos = [];
            let cantidad = Number(prompt("¿Cuántos préstamos desea ingresar?"));

            for (let i = 0; i < cantidad; i++) {
                let diasRetraso = Number(prompt("Ingrese los días de retraso del préstamo " + (i + 1)));
                let multa = Number(prompt("Ingrese la multa del préstamo " + (i + 1)));
            
                prestamos.push({
                    diasRetraso: diasRetraso,
                    multa: multa
                });
            }
        
            let resultado = validarPrestamoBiblioteca(prestamos);
        
            alert("Resultado: " + resultado);
            break;
        }

        case 19: {
            let distancias = [];
            let cantidad = Number(prompt("¿Cuántos destinos desea ingresar?"));

            for (let i = 0; i < cantidad; i++) {
                let distancia = Number(prompt("Ingrese la distancia del destino " + (i + 1) + " en Km"));
                distancias.push(distancia);
            }
        
            let visitados = planRutaEntrega(distancias);
        
            if (visitados.length === 0) {
                alert("No es posible visitar ningún destino con el combustible disponible. Tanquee más.");
            } else {
                alert(
                    "Se pueden visitar los siguientes destinos (distancias en km):\n" +
                    visitados.join(", ")
                );
            }
            break;
        }

        case 20: {
            let usuarios = [];
            let cantidad = Number(prompt("¿Cuántos usuarios desea ingresar?"));

            for (let i = 0; i < cantidad; i++) {
                let id = prompt("Ingrese el ID del usuario " + (i + 1));
                let nombre = prompt("Ingrese el nombre del usuario " + (i + 1));
                let email = prompt("Ingrese el email del usuario " + (i + 1));
            
                usuarios.push({
                    id: id,
                    nombre: nombre,
                    email: email
                });
            }
        
            let csv = generarCsvUsuarios(usuarios);
        
            alert("CSV generado, descárguelo:\n\n" + csv);
            break;
        }

        case 0:
            alert("Programa finalizado, ¡Nooooo!");
            break;

        default:
            alert("Opción inválida, lea bien mi hermano");
    }

} while (opcion !== 0);
