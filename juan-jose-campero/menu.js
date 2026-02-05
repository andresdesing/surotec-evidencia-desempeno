import ejercicio1, { menuCajero } from './ejercicio1.js';
import ejercicio2, {insertarProductos} from './ejercicio2.js';
import ejercicio3, {ingresoEstudiantes} from './ejercicio3.js';
import ejercicio4,{ingresoCarrito} from './ejercicio4.js';
import ejercicio5, {pedirHorasLlegada} from './ejercicio5.js';
import ejercicio6, {pedirVentas} from './ejercicio6.js';
import ejercicio7, {pedirContraseña} from './ejercicio7.js';
import ejercicio8, {pedirNumeros} from './ejercicio8.js';
import ejercicio9, {pedirDatosNomina} from './ejercicio9.js';
import ejercicio10, {pedirDatosConversion} from './ejercicio10.js';
import ejercicio11, {pedirDatosAula} from './ejercicio11.js';
import ejercicio12, {pedirDatosTexto} from './ejercicio12.js';
import ejercicio13, {pedirTemperaturas} from './ejercicio13.js';
import ejercicio14, {pedirDatosCliente} from './ejercicio14.js';
import ejercicio15,{pedirTareas} from './ejercicio15.js';
import ejercicio16,{pedirDatosServicio} from './ejercicio16.js';
import ejercicio17,{pedirTransacciones} from './ejercicio17.js';
import ejercicio18,{pedirPrestamos} from './ejercicio18.js';
import ejercicio19,{pedirDestinos} from './ejercicio19.js';
import ejercicio20,{pedirUsuarios} from './ejercicio20.js';

const conversor = ejercicio10();

function mostrarMenu() {
    console.log("Seleccione un ejercicio para ejecutar (1-20) o 0 para salir:");
    for (let i = 1; i <= 20; i++) {
        console.log(`${i}. Ejercicio ${i}`);
    }
    console.log("0. Salir");
}

function ejecutarEjercicio(opcion) {
    switch (opcion) {
      case "1":
        const monto = menuCajero();
        if (monto === null) break;
        const resultadoCajero = ejercicio1(monto);
        console.log("Distribución de billetes:", resultadoCajero);
        break;
        
      case "2":
        const productos = insertarProductos();
        const productosActualizados = ejercicio2(productos);
        console.log("Productos actualizados:", productosActualizados);
        break;

      case "3":
        const estudiantes = ingresoEstudiantes();
        const resultados = ejercicio3(estudiantes);
        console.log("Resultados de becas:");
        console.log(resultados);
        break;

      case "4":
        const carrito = ingresoCarrito();
        const total = ejercicio4(carrito);
        console.log("Total a pagar con descuento:", total);
        break;

      case "5":
        const llegadas = pedirHorasLlegada();
        const resultado = ejercicio5(llegadas);
        console.log("Total multa:", resultado);
        break;

      case "6":
        const ventas = pedirVentas();
        const comision = ejercicio6(ventas);
        console.log("Comisión total:", comision);   
        break;

      case "7":
        const contraseña = pedirContraseña();
        const seguridad = ejercicio7(contraseña);
        console.log(`La contraseña es: ${seguridad}`);
        break;

      case "8":
        const numeros = pedirNumeros();
        const promedio = ejercicio8(numeros);
        console.log(`El promedio de los números restantes es: ${promedio}`);
        break;

      case "9":
        const { horasTrabajadas, valorHora } = pedirDatosNomina();
        const salario = ejercicio9(horasTrabajadas, valorHora);
        console.log(`El salario semanal es: ${salario}`);
        break;

      case "10":
      const datos = pedirDatosConversion();
      if (!datos) {
          console.log("Datos inválidos para la conversión.");
          break;
      }
      const resultadoConv = conversor(datos.montoConv, datos.origen, datos.destino);
      if (!resultadoConv) {
          console.log("Conversión no válida.");
          break;
      }
      console.log(`Resultado de la conversión: ${resultadoConv.resultadoConv} ${datos.destino}. Contador: ${resultadoConv.contador}`);
      break;

      case "11":
       const datosAula = pedirDatosAula();
       if (!datosAula) {
           console.log("Datos inválidos para el aula.");
           break;
       }
        const fuera = ejercicio11(datosAula.capacidad, datosAula.grupos);
        console.log(`Estudiantes que no caben en el aula: ${fuera}`);
        break;

      case "12":
        const datosTexto = pedirDatosTexto();
        if (!datosTexto) {
            console.log("Datos inválidos para el texto.");
            break;
        }
        const resultadoTexto = ejercicio12(datosTexto.texto, datosTexto.prohibidas);
        console.log("Texto limpio:", resultadoTexto);
        break;
        
      case "13":
        const temperaturas = pedirTemperaturas();
        const estado = ejercicio13(temperaturas);
        console.log(estado);
        break;

      case "14":
        const {compras, antiguedad} = pedirDatosCliente();
        const descuentoCliente = ejercicio14(compras, antiguedad);
        if (descuentoCliente > 0) {
            console.log(`Descuento aplicado: $${descuentoCliente}`);
        } else {
            console.log("No se aplicó descuento.");
        }
        break;

      case "15":
        const tareas = pedirTareas();
        const urgentes = ejercicio15(tareas);
        console.log("Tareas urgentes:", urgentes);
        break;

      case "16":
        const { consumo, estrato } = pedirDatosServicio();
        const totalServicio = ejercicio16(consumo, estrato);
        console.log(`Total a pagar por el servicio de agua: $${totalServicio}`);
        break;

      case "17":
        const transacciones = pedirTransacciones();
        const reporte = ejercicio17(transacciones);
        console.log(reporte);
        break;

      case "18":
        const prestamos = pedirPrestamos();
        const estadoPrestamo = ejercicio18(prestamos);
        console.log(estadoPrestamo);
        break;

      case "19":
        const destinos = pedirDestinos();
        const ruta = ejercicio19(destinos);
        console.log("Destinos que se pueden visitar:", ruta);
        break;

      case "20":
        const usuarios = pedirUsuarios();
        const csv = ejercicio20(usuarios);
        console.log("CSV generado:", csv);
        break;

      case "0":
        console.log("Saliendo del programa.");
        return false;
      default:
        console.log("Opción no válida.");
    }
   return true;
}

let bucle = true;

while (bucle) {
    mostrarMenu();
    const opcion = prompt("Ingrese su opción: ");

    if (isNaN(opcion) || Number(opcion) < 0 || Number(opcion) > 20) {
        console.log("Por favor, ingrese un número válido entre 0 y 20.");
    } else {
        bucle = ejecutarEjercicio(opcion);
    }
}





