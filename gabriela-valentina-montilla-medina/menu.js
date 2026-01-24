import { ejercicio1 } from "./ejercicio1.js"
import { ejercicio2 } from "./ejercicio2.js"
import { ejercicio3 } from "./ejercicio3.js"
import { ejercicio4 } from "./ejercicio4.js"
import { ejercicio5 } from "./ejercicio5.js"
import { ejercicio6 } from "./ejercicio6.js"
import { ejercicio7 } from "./ejercicio7.js"
import { ejercicio8 } from "./ejercicio8.js"
import { ejercicio9 } from "./ejercicio9.js"
import { ejercicio10 } from "./ejercicio10.js"
import { ejercicio11 } from "./ejercicio11.js"
import { ejercicio12 } from "./ejercicio12.js"
import { ejercicio13 } from "./ejercicio13.js"
import { ejercicio14 } from "./ejercicio14.js"
import { ejercicio15 } from "./ejercicio15.js"
import { ejercicio16 } from "./ejercicio16.js"
import { ejercicio17 } from "./ejercicio17.js"
import { ejercicio18 } from "./ejercicio18.js"
import { ejercicio19 } from "./ejercicio19.js"
import { ejercicio20 } from "./ejercicio20.js"

function mostrarMenu() {
  return prompt(
    "MENÚ PRINCIPAL EVALUACION DE DESEMPEÑO\n" +
    "1. Cajero de Denominaciones\n" +
    "2. Inventario con Precios Dinámicos\n" +
    "3. Sistema de Becas\n" +
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
    "0. Salir"
  )
}

function ejecutarMenu() {
    let opcion = ""

    while (opcion !== "0") {
        opcion = mostrarMenu()

        switch (opcion) {
            case "1":
                alert(JSON.stringify(ejercicio1(), null, 2))
                break

                break
            case "2":
                alert(JSON.stringify(ejercicio2(), null, 2))
                break
            case "3": {
                let resultado = ejercicio3()
                if (resultado) {
                    alert("El estudiante es beneficiario de la beca")
                } else {
                    alert("El estudiante no cumple los requisitos para la beca")
                }
                break
            }
            case "4":
                let resultado = ejercicio4()
                alert(
                    JSON.stringify(resultado, null, 2)
                )
                break

            case "5":
                alert(
                    JSON.stringify(ejercicio5(), null, 2)
                )
                break
            case "6":
                case "6":
                alert("Total de impuestos: $" + ejercicio6())
                break
            case "7":
                alert("La contraseña es: " + ejercicio7())
                break
            case "8":
                  alert("Promedio (sin máximo ni mínimo): " + ejercicio8())
                break
            case "9":
                alert("Salario total: $" + ejercicio9())
                break
            case "10":
                alert("Valor convertido: " + ejercicio10())
                break
            case "11":
                 alert("Estudiantes que quedaron fuera: " + ejercicio11())
                break
            case "12":
                alert(JSON.stringify(ejercicio12(), null, 2))
                break
            case "13":
                alert(ejercicio13())
                break
            case "14":
                let descuento = ejercicio14()
                if (descuento > 0) {
                    alert("Descuento aplicado: 25%")
                } else {
                    alert("No aplica descuento")
                }
                break
            case "15":
                 alert(JSON.stringify(ejercicio15(), null, 2))
                break
            case "16":
                 alert("Valor a pagar: $" + ejercicio16())
                break
            case "17":
                alert(JSON.stringify(ejercicio17(), null, 2))
                break
            case "18":
                alert(ejercicio18())
                break
            case "19":
                alert(JSON.stringify(ejercicio19(), null, 2))
                break
            case "20":
                alert(ejercicio20().replace(/\n/g, "\n"))
                break
            case "0":
                alert("Programa finalizado")
                break
            default:
                alert("Opción inválida")
        }
    }
}

ejecutarMenu()
